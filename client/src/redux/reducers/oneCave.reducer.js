import { oneCaveConstants } from "../actions/oneCave.actions";

const initialState = { isFetching: false, item: [] };

export function oneCave(state = initialState, action) {
  switch (action.type) {
    case oneCaveConstants.ONE_CAVE_REQUEST:
      return {
        isFetching: true,
        item: [],
        error: null
      };
    case oneCaveConstants.ONE_CAVE_SUCCESS:
      return {
        isFetching: false,
        item: action.item,
        error: null
      };
    case oneCaveConstants.ONE_CAVE_FAILURE:
      return {
        isLogged: false,
        error: action.error
      };
    default:
      return state;
  }
}
