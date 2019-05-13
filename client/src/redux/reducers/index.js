import { combineReducers } from "redux";
import { allCave } from "./allCave.reducer";
import { oneCave } from "./oneCave.reducer";
import { allExpedition } from "./allExped.reducer";
import { oneExpedition } from "./oneExped.reducer";
import { authentication } from "./authentication.reducer";
import { allPhoto } from "./photo.reducer";

export const rootReducer = combineReducers({
  user: authentication,
  caves: allCave,
  cave: oneCave,
  expeditions: allExpedition,
  expedition: oneExpedition,
  photo: allPhoto
});
