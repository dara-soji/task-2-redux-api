import { ActionTypes } from "../constants/action-types";

export const setNationalStat = (nationStat) => {
  return {
    type: ActionTypes.SET_NATION_STAT,
    payload: nationStat,
  };
};

export const setStateStat = (stateStat) => {
  return {
    type: ActionTypes.SET_STATE_STAT,
    payload: stateStat,
  };
};

