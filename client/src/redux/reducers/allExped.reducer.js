import { allExpeditionConstants } from "../actions/allExped.actions";

export const initialState = {
  isFetching: false,
  items: [],
  countRecords: null,
  error: null
};

export function allExpedition(state = initialState, action) {
  switch (action.type) {
    case allExpeditionConstants.ALL_EXPEDITIONS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
        countRecords: action.countRecords,
        error: null
      };
    case allExpeditionConstants.DELETE_EXPEDITIONS_SUCCESS:
      const newState = state.items.filter(item => {
        return item._id !== action.item._id;
      });

      return {
        ...state,
        items: newState,
        countRecords: action.countRecords
      };
    case allExpeditionConstants.CREATE_EXPEDITIONS_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.item],
        countRecords: action.countRecords
      };
    case allExpeditionConstants.UPDATE_EXPEDITIONS_SUCCESS:
      const State = state.items.filter(item => {
        return item._id !== action.item._id;
      });
      return {
        ...state,
        items: [...State, action.item],
        countRecords: action.countRecords
      };
    case allExpeditionConstants.ALL_EXPEDITIONS_FAILURE:
      return {
        isFetching: false,
        items: [],
        countRecords: null,
        status: action.error.status,
        error: action.error.statusText
      };
    default:
      return state;
  }
}
