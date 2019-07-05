import { photoConstants } from "../actions/photo.actions";

const initialState = { isFetching: false, items: [], error: null };

export function allPhoto(state = initialState, action) {
  switch (action.type) {
    case photoConstants.PHOTO_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case photoConstants.PHOTO_SUCCESS:
      return {
        isFetching: false,
        items: action.items,
        error: null
      };

    case photoConstants.DELETE_PHOTO_SUCCESS:
      const newState = state.items.filter(item => {
        return item._id !== action.item._id;
      });
      return {
        isFetching: false,
        items: newState,
        error: null
      };
    case photoConstants.CREATE_PHOTO_SUCCESS:
      return {
        isFetching: false,
        items: [...state.items, action.item],
        error: null
      };

    case photoConstants.PHOTO_FAILURE:
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
