import { combineReducers, createStore } from "redux";
import sortFilterReducer from "./sortFilter";

const rootReducer = combineReducers({
    //moviesReducer:moviesReducer,
    sortFilterReducer:sortFilterReducer,
  });

  export const store = createStore(rootReducer);
