import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import {logger} from 'redux-logger';

// const middlewares = [thunk];

// if (process.env.NODE_ENV === `development`) {
//   const { logger } = require('redux-logger');

//   middlewares.push(logger);
// }
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
export default configureStore;
