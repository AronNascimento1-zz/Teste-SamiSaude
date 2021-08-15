import React, { useEffect, useState } from "react";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Hero, fetchSingleHero } from "../actions";
import "../styles/heroItem.scss";
import NotFound from "../images/NotFound.png";
import { Link } from "react-router-dom";
import LoadingIcon from "../images/LoadingIcon.gif";

import { PageNotFound } from "./PageNotFound";

interface HeroProps {
  id: string;
  hero: Hero;
  match: {
    url: string;
  };
  fetchSingleHero: Function;
}

export const _HeroItem: React.FC<HeroProps> = (props) => {
  const [heroId, setHeroId] = useState(props.match.url);
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    setLoading(true);
  
    props.fetchSingleHero(heroId);
    
    
    setLoading(false);
  });




  const addDefaultImgSrc = (e: React.BaseSyntheticEvent): void => {
    e.target.src = NotFound;
  };

  const {
    connections,
    powerstats,
    name,
    biography,
    image,
    work,
    appearance,
  } = props.hero;

  if (loading) {
    return (
      <div>
        <img src={LoadingIcon} alt="Loading icon" />
      </div>
    );
  }

  if (!props.hero.id) {
    return <PageNotFound />;
  }

  return (
    <>
      <div>
        <div id="button-container">
          <Link to="/">
            <button id="back-button">Back</button>
          </Link>
        </div>
        <div className="hero-card">
          <div className="title">
            <h1>{name}</h1>
          </div>
          <img
            id="hero-img"
            src={image ? image.url : "Image Not Found"}
            alt={`${name}`}
            onError={addDefaultImgSrc}
          />
          <div className="biography-grid">
            <div className="biography">
              <h2>Biography</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Real Name:</th>
                    <td>{biography["full-name"]}</td>
                  </tr>
                  <tr>
                    <th>Alter Egos:</th>
                    <td>{biography["alter-egos"]}</td>
                  </tr>
                  <tr>
                    <th>Headquarters:</th>
                    <td>{work.base}</td>
                  </tr>
                  <tr>
                    <th>Connections:</th>
                    <td>{connections["group-affiliation"]}</td>
                  </tr>
                  <tr>
                    <th>Species:</th>
                    <td>{appearance.race}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="appearance-grid">
            <div className="appearance">
              <h3 style={{ textAlign: "center" }}>Appearance</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="stat-name">gender:</th>{" "}
                    <td>{appearance["gender"]}</td>
                  </tr>

                  <tr>
                    <th className="stat-name">race:</th>{" "}
                    <td> {appearance["race"]}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">height:</th>
                    <td>{appearance.height.map((e) => {
                      return e + ", ";
                    })}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">weight:</th>
                    <td>{appearance.weight.map((e) => {
                      return e + ", ";
                    })}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className="powerstats-grid">
            <div className="powerstats">
              <h3>Powerstats</h3>
              <table>
                <tbody>
                  <tr>

                    <th className="stat-name">Intelligence:</th>{" "}
                    <td>{powerstats.intelligence}</td>
                  </tr>

                  <tr>
                    <th className="stat-name">Strength:</th>{" "}
                    <td>{powerstats.strength}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Speed:</th>
                    <td>{powerstats.speed}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Durability:</th>{" "}
                    <td>{powerstats.durability}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Power:</th>
                    <td>{powerstats.power}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Combat:</th>
                    <td>{powerstats.combat}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="other-stats-grid">
            <div className="other-stats">
              <h3 style={{ textAlign: "center" }}>Other Stats</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="stat-name">Place Of Birth:</th>{" "}
                    <td>{biography["place-of-birth"] === "-"
                      ? " Unknown"
                      : biography["place-of-birth"]}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">First Appearance:</th>{" "}
                    <td>{biography["first-appearance"]}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Publisher:</th>{" "}
                    <td>{biography["publisher"]}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Alignment:</th>{" "}
                    <td>{biography["alignment"]}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Job:</th>

                    <td>{work.occupation === "-" ? " Unknown" : work.occupation}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Relatives:</th>{" "}
                    <td>{connections.relatives}</td>
                  </tr>
                  <tr>
                    <th className="stat-name">Aliases:</th>{" "}
                    <td> {biography.aliases.map((e) => {
                      return e + ", ";
                    })}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      ){'}'}
    </>
  );
};

const mapStateToProps = (state: StoreState): { hero: Hero } => {
  return { hero: state.hero };
};

export const HeroItem = connect(mapStateToProps, { fetchSingleHero })(
  _HeroItem
);
