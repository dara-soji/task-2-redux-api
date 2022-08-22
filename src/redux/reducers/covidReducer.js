import { ActionTypes } from "../constants/action-types";
const intialState = {
  stat: [],
};
const intialNation = {
  stat: [],
};

export const nationReducer = (state = intialNation, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NATION_STAT:
      return { ...state, stat: payload };
    default:
      return state;
  }
};


export const stateReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STATE_STAT:
      return { ...state, stat: payload };
    default:
      return state;
  }
};

