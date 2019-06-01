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
        isFetching: true
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
      const CountRecordsMinus = state.countRecords - 1;
      return {
        ...state,
        items: newState,
        countRecords: CountRecordsMinus
      };
    case allCaveConstants.CREATE_CAVE_SUCCESS:
      const CountRecordsPlus = state.countRecords + 1;
      return {
        ...state,
        items: [...state.items, action.item],
        countRecords: CountRecordsPlus
      };
    case allCaveConstants.UPDATE_CAVE_SUCCESS:
      const State = state.items.filter(item => {
        return item._id !== action.item._id;
      });
      return {
        ...state,
        items: [...State, action.item]
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
