import { oneExpeditionConstants } from "../actions/oneExped.actions";

const initialState = { isFetching: false, item: {}, error: null };

export function oneExpedition(state = initialState, action) {
  switch (action.type) {
    case oneExpeditionConstants.ONE_EXPEDITIONS_REQUEST:
      return { ...state, isFetching: true };
    case oneExpeditionConstants.ONE_EXPEDITIONS_SUCCESS:
      return { ...state, item: action.item };
    case oneExpeditionConstants.ONE_EXPEDITIONS_FAILURE:
      return {
        ...state,
        status: action.error.status,
        error: action.error.statusText
      };
    default:
      return state;
  }
}
