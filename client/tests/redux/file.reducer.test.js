import { allPhoto, initialState } from "../../src/redux/reducers/photo.reducer";
import { photoConstants } from "../../src/redux/actions/photo.actions";

describe("AllCavesReducer", () => {
  it("request", () => {
    const action = {
      type: photoConstants.PHOTO_REQUEST
    };
    expect(allPhoto(initialState, action)).toEqual({
      error: null,
      isFetching: true,
      items: []
    });
  });
  it("success", () => {
    const action = {
      type: photoConstants.PHOTO_SUCCESS,
      items: [1, 2, 3]
    };
    expect(allPhoto(initialState, action)).toEqual({
      error: null,
      isFetching: false,
      items: action.items
    });
  });
  it("failure", () => {
    const action = {
      type: photoConstants.PHOTO_FAILURE,
      error: { status: 401, statusText: "Unauthorized" }
    };
    expect(allPhoto(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      items: [],
      status: action.error.status,
      error: action.error.statusText
    });
  });
  it("delete", () => {
    const action = {
      type: photoConstants.DELETE_PHOTO_SUCCESS,
      item: { _id: 1 }
    };
    const oldState = { items: [{ _id: 1 }, { _id: 2 }, { _id: 3 }] };

    expect(allPhoto(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }],
      error: null
    });
  });
  it("create", () => {
    const action = {
      type: photoConstants.CREATE_PHOTO_SUCCESS,
      item: { _id: 1 }
    };
    const oldState = { items: [{ _id: 2 }, { _id: 3 }] };

    expect(allPhoto(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }, action.item],
      error: null
    });
  });
});
