import { combineReducers } from "redux";
import { cardsReducer } from "./cards/cardsReducer";
import { playersReducer } from "./players/playersReducer";
import { swapiListsReducer } from "./swapiLists/swapiListsReducer";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  players: playersReducer,
  swapiLists: swapiListsReducer,
});
