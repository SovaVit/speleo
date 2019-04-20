import { oneCaveConstants } from "../actions/oneCave.actions";

const initialState = { isFetching: false, item: {}, error: null};

export function oneCave(state = initialState, action) {
  switch (action.type) {
    case oneCaveConstants.ONE_CAVE_REQUEST:
      return {...state, isFetching: true};
    case oneCaveConstants.ONE_CAVE_SUCCESS:
      return { ...state, isFetching: false, item: action.item};
    case oneCaveConstants.ONE_CAVE_FAILURE:
      return {
        ...state,
        isFetching: false,
        status: action.error.status,
        error: action.error.statusText
      };
    default:
      return state;
  }
}
