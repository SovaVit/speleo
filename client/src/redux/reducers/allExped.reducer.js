
import { allExpeditionConstants } from "../actions/allExped.actions";



const initialState = { isFetching: false, items: [], error: null };

export function allExpedition(state = initialState, action) {
  switch (action.type) {
    case allExpeditionConstants.ALL_EXPEDITIONS_REQUEST:
      return {
        isFetching: true,
        items: [],
        error: null
      };
    case allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS:
      return {
        isFetching: false,
        items: action.items,
        error: null
      };
      case allExpeditionConstants.DELETE_EXPEDITIONS_SUCCESS:
      const newState = state.items.filter(item => {return item._id !== action.item._id});
      return {
        isFetching: false,
        items: newState,
        error: null
      }
      case allExpeditionConstants.CREATE_EXPEDITIONS_SUCCESS:
      return {
        isFetching: false,
        items: [...state.items, action.item],
        error: null
      }
    case allExpeditionConstants.ALL_EXPEDITIONS_FAILURE:
      return {
        isFetching: false,
        items: [],
        status: action.error.status,
        error: action.error.statusText
      };
    default:
      return state;
  }
}
