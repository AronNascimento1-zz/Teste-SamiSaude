import React from "react";
import { Hero, fetchAllHeroes } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SearchAndInfoContainer from "./SearchAndInfoContainer";
import NotFound from "../images/NotFound.png";
import "../styles/heroesList.scss";

interface ListProps {
  heroes: Hero[];
  fetchAllHeroes: Function;
}

class _HeroesList extends React.Component<ListProps> {
  componentDidMount() {
    this.props.fetchAllHeroes();
  }

  addDefaultImgSrc = (e: React.BaseSyntheticEvent) => {
    e.target.src = NotFound;
  };

  renderHeroes(): JSX.Element[] {
    return this.props.heroes.map(
      ({ id, name, biography, appearance, work, connections, image }: Hero) => {
        return (
          <div className="card" key={id}>
            <div className="title">
              <img alt={name} src={image.url} onError={this.addDefaultImgSrc} />

              <h2>
                <Link to={`${id}`}>
                  {name} - {biography["publisher"]}
                </Link>
              </h2>
            </div>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <SearchAndInfoContainer />
        <div className="container">
          {this.renderHeroes()}


        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { heroes: Hero[] } => {
  return { heroes: state.heroes };
};

export const HeroesList = connect(mapStateToProps, { fetchAllHeroes })(
  _HeroesList
);
