import { combineReducers } from "redux";
import { heroesReducer, heroReducer } from "./reducer";
import { Hero } from "../actions";

export interface StoreState {
  heroes: Hero[];
  hero: Hero;
}

export const reducers = combineReducers<StoreState>({
  heroes: heroesReducer,
  hero: heroReducer,
});
