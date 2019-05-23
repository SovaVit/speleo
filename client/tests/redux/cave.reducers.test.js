import {
  allCave,
  initialState
} from "../../src/redux/reducers/allCave.reducer";
import { allCaveConstants } from "../../src/redux/actions/allCave.actions";

describe("AllCavesReducer", () => {
  it("should return the initial state", () => {
    expect(allCave(undefined, {})).toEqual({
      error: null,
      isFetching: false,
      items: []
    });
  });
  it("request", () => {
    const action = {
      type: allCaveConstants.ALL_CAVE_REQUEST
    };
    expect(allCave(initialState, action)).toEqual({
      error: null,
      isFetching: true,
      items: []
    });
  });
  it("success", () => {
    const action = {
      type: allCaveConstants.ALL_CAVE_SUCCESS,
      items: [1, 2, 3]
    };
    expect(allCave(initialState, action)).toEqual({
      error: null,
      isFetching: false,
      items: action.items
    });
  });
  it("failure", () => {
    const action = {
      type: allCaveConstants.ALL_CAVE_FAILURE,
      error: { status: 401, statusText: "Unauthorized" }
    };
    expect(allCave(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      items: [],
      status: action.error.status,
      error: action.error.statusText
    });
  });
  it("delete", () => {
    const action = {
      type: allCaveConstants.DELETE_CAVE_SUCCESS,
      item: { _id: 1 }
    };
    const oldState = { items: [{ _id: 1 }, { _id: 2 }, { _id: 3 }] };

    expect(allCave(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }],
      error: null
    });
  });
  it("create", () => {
    const action = {
      type: allCaveConstants.CREATE_CAVE_SUCCESS,
      item: { _id: 1 }
    };
    const oldState = { items: [{ _id: 2 }, { _id: 3 }] };

    expect(allCave(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }, action.item],
      error: null
    });
  });
  it("update", () => {
    const action = {
      type: allCaveConstants.UPDATE_CAVE_SUCCESS,
      item: { _id: 1, t: "t" }
    };
    const oldState = { items: [{ _id: 1, t: "v" }, { _id: 2 }, { _id: 3 }] };
    expect(allCave(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }, action.item],
      error: null
    });
  });
});
