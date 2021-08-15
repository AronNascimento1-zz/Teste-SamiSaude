import React, { useState } from "react";
import "../styles/SearchAndInfoContainer.scss";

import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Hero, searchHeroes, } from "../actions";

import Swal from "sweetalert2";

interface SearchProps {
  searchHeroes: Function;
  hero: Hero;

  response?: {
    error?: string;
  };
}



const _SearchAndInfoContainer = (props: SearchProps): JSX.Element => {
  const [heroName, setHeroName] = useState("");

  const searchHeroes = () => {
    if (heroName === "") {
      Swal.fire({
        title: 'Please Write a Name Example "Ironman"',
        icon: "warning",
        confirmButtonText: "OK",
      });
    }

    props.searchHeroes(heroName);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroName(e.target.value);
  };

  //Handle search submission on enter keypress
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      searchHeroes();
    }
  };

  return (

    <div className="info-container">
      <h2>Welcome to the Search Hero !</h2>
      <p>Search for information about your favorite Superhero or Villain!</p>

      <input
        onChange={handleInputChange}
        onKeyPress={handleKeypress}
        value={heroName}
        type="text"
        id="-searchbar"
        placeholder="Search Heroes..."
      />

      <button id="search-button" onClick={searchHeroes}>
        Search
      </button>
    </div>

  );
};

const mapStateToProps = (state: StoreState): { hero: Hero } => {
  return { hero: state.hero };
};

export const SearchAndInfoContainer = connect(mapStateToProps, {
  searchHeroes,
})(_SearchAndInfoContainer);

export default SearchAndInfoContainer;
