import { SET_FILTER } from "../actionTypes";
import { FILTERS } from "../../service/constants";

const initialState = FILTERS.BY_DEFAULT;

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;