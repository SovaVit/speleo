import { allCaveConstants } from "../actions/allCave.actions";

const initialState = { isFetching: false, items: [] };

export function allCave(state = initialState, action) {
  switch (action.type) {
    case allCaveConstants.ALL_CAVE_REQUEST:
      return {
        isFetching: true,
        items: [],
        error: null
      };
    case allCaveConstants.ALL_CAVE_SUCCESS:
      return {
        isFetching: false,
        items: action.items,
        error: null
      };
    case allCaveConstants.ALL_CAVE_FAILURE:
      return {
        isLogged: false,
        error: action.error
      };
    default:
      return state;
  }
}
