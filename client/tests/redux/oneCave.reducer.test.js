import {
    oneCave,
    initialState
  } from "../../src/redux/reducers/oneCave.reducer";
  import { oneCaveConstants } from "../../src/redux/actions/oneCave.actions";
  
  describe("OneCaveReducer", () => {
    it("request", () => {
      const action = {
        type: oneCaveConstants.ONE_CAVE_REQUEST
      };
      expect(oneCave(initialState, action)).toEqual({
          error: null, 
          isFetching: true, 
          item: {}
        });
    });
    it("success", () => {
      const action = {
        type: oneCaveConstants.ONE_CAVE_SUCCESS,
        item: {1:1}
      };
      expect(oneCave(initialState, action)).toEqual({
        error: null,
        isFetching: false,
        item: action.item
      });
    });
    it("failure", () => {
      const action = {
        type: oneCaveConstants.ONE_CAVE_FAILURE,
        error: { status: 401, statusText: "Unauthorized" }
      };
      expect(oneCave(initialState, action)).toEqual({
        ...initialState,
        isFetching: false,
        item: {},
        status: action.error.status,
        error: action.error.statusText
      });
    });
});