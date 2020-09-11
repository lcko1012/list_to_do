import { combineReducers } from "redux";

import items from "./items";
import Sort from "./sort"

const appReducers = combineReducers({
  items,
  Sort
});

export default appReducers;
