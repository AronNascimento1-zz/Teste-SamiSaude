import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Hero {
  id: string;
  name: string;

  powerstats: {
    strength: string;
    speed: string;
    intelligence: string;
    durability: string;
    power: string;
    combat: string;
  };

  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    publisher: string;
    "first-appearance": string;
    alignment: string;
  };

  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
  };

  work: {
    occupation: string;
    base: string;
  };

  connections: {
    "group-affiliation": string;
    relatives: string;
  };

  image: {
    url: string;
  };
}

export interface FetchAllHeroesAction {
  type: ActionTypes.fetchAllHeroes;
  payload: Hero[];
}

export interface FetchSingleHeroAction {
  type: ActionTypes.fetchSingleHero;
  payload: Hero;
}

export interface SearchHeroesAction {
  type: ActionTypes.searchHeroes;
  payload: Hero[];
}

export interface HeroId {
  id: string;
}

export interface HeroName {
  name: string;
}

const corsProxyUrl = "https://thingproxy.freeboard.io/fetch/";

export const fetchAllHeroes = () => {
  const url = "https://superheroapi.com/api/5903141623089276/search/A/";
  return async (dispatch: Dispatch) => {
    const res = await axios.get(corsProxyUrl + url);
    dispatch<FetchAllHeroesAction>({
      type: ActionTypes.fetchAllHeroes,
      payload: res.data.results,
    });
  };
};

export const searchHeroes = (heroName: HeroName) => {
  const url = `https://superheroapi.com/api/5903141623089276/search/${heroName}`;
  return async (dispatch: Dispatch) => {
    const res = await axios.get(corsProxyUrl + url);
    console.log(res.data);

    dispatch<SearchHeroesAction>({
      type: ActionTypes.searchHeroes,
      payload: res.data.results,
    });
  };
};

export const fetchSingleHero = (heroId: HeroId) => {
  return async (dispatch: Dispatch) => {
    const url = `https://superheroapi.com/api/5903141623089276${heroId}`;
    const res = await axios.get<Hero>(corsProxyUrl + url);

    dispatch<FetchSingleHeroAction>({
      type: ActionTypes.fetchSingleHero,
      payload: res.data,
    });
  };
};