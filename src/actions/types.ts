import {
  FetchAllHeroesAction,
  FetchSingleHeroAction,
  SearchHeroesAction,
} from "./heroes";

export enum ActionTypes {
  fetchAllHeroes,
  fetchSingleHero,
  searchHeroes,
}

export type Action =
  | FetchAllHeroesAction
  | FetchSingleHeroAction
  | SearchHeroesAction;
