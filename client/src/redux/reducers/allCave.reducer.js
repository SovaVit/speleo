import { allCaveConstants } from "../actions/allCave.actions";

const initialState = {
  isFetching: false,
  items: [],
  countRecords: null,
  error: null
};

export function allCave(state = initialState, action) {
  switch (action.type) {
    case allCaveConstants.ALL_CAVE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case allCaveConstants.ALL_CAVE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
        countRecords: action.countRecords,
        error: null
      };

    case allCaveConstants.DELETE_CAVE_SUCCESS:
      const newState = state.items.filter(item => {
        return item._id !== action.item._id;
      });

      return {
        isFetching: false,
        items: newState,
        countRecords: action.countRecords,
        error: null
      };
    case allCaveConstants.CREATE_CAVE_SUCCESS:
      return {
        isFetching: false,
        items: [...state.items, action.item],
        countRecords: action.countRecords,
        error: null
      };
    case allCaveConstants.UPDATE_CAVE_SUCCESS:
      const State = state.items.filter(item => {
        return item._id !== action.item._id;
      });
      return {
        isFetching: false,
        items: [...State, action.item],
        countRecords: action.countRecords,
        error: null
      };

    case allCaveConstants.ALL_CAVE_FAILURE:
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
