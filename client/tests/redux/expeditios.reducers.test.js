import {
  allExpedition,
  initialState
} from "../../src/redux/reducers/allExped.reducer";
import { allExpeditionConstants } from "../../src/redux/actions/allExped.actions";

describe("AllExpeditionReducer", () => {
  it("request", () => {
    const action = {
      type: allExpeditionConstants.ALL_EXPEDITIONS_REQUEST
    };
    expect(allExpedition(initialState, action)).toEqual({
      ...initialState,
      isFetching: true
    });
  });
  it("success", () => {
    const action = {
      type: allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS,
      items: [1, 2, 3]
    };
    expect(allExpedition(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      items: action.items
    });
  });
  it("failure", () => {
    const action = {
      type: allExpeditionConstants.ALL_EXPEDITIONS_FAILURE,
      error: { status: 401, statusText: "Unauthorized" }
    };
    expect(allExpedition(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      items: [],
      status: action.error.status,
      error: action.error.statusText
    });
  });
  it("delete", () => {
    const action = {
      type: allExpeditionConstants.DELETE_EXPEDITIONS_SUCCESS,
      item: { _id: 1 }
    };
    const oldState = { items: [{ _id: 1 }, { _id: 2 }, { _id: 3 }] };

    expect(allExpedition(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }],
      error: null
    });
  });
  it("create", () => {
    const action = {
      type: allExpeditionConstants.CREATE_EXPEDITIONS_SUCCESS,
      item: { _id: 1 }
    };
    const oldState = { items: [{ _id: 2 }, { _id: 3 }] };

    expect(allExpedition(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }, action.item],
      error: null
    });
  });
  it("update", () => {
    const action = {
      type: allExpeditionConstants.UPDATE_EXPEDITIONS_SUCCESS,
      item: { _id: 1, t: "t" }
    };
    const oldState = { items: [{ _id: 1, t: "v" }, { _id: 2 }, { _id: 3 }] };
    expect(allExpedition(oldState, action)).toEqual({
      isFetching: false,
      items: [{ _id: 2 }, { _id: 3 }, action.item],
      error: null
    });
  });
});
