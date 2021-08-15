import { Hero, Action, ActionTypes } from "../actions";

const initialState: Hero = {
  id: "",
  name: "",
  powerstats: {
    strength: "",
    speed: "",
    intelligence: "",
    durability: "",
    power: "",
    combat: "",
  },

  biography: {
    "full-name": "",
    "alter-egos": "",
    aliases: [],
    "place-of-birth": "",
    "first-appearance": "",
    publisher: "",
    alignment: "",
  },

  appearance: {
    gender: "",
    race: "",
    height: [],
    weight: [],
  },

  work: {
    occupation: "",
    base: "",
  },

  connections: {
    "group-affiliation": "",
    relatives: "",
  },

  image: {
    url: "",
  },
};

export const heroesReducer = (state: Hero[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchAllHeroes:
      return action.payload;

    case ActionTypes.searchHeroes:
      console.log(action);
      return action.payload || state;

    default:
      return state;
  }
};

export const heroReducer = (state: Hero = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchSingleHero:
      return action.payload;

    default:
      return state;
  }
};
