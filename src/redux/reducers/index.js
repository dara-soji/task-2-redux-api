import { combineReducers } from "redux";
import { nationReducer, stateReducer } from "./covidReducer";
const reducers = combineReducers({
  nationCovidStat: nationReducer,
  stateCovidStat: stateReducer,
});
export default reducers;
