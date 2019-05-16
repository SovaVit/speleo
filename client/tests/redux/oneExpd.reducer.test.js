import {
    oneExpedition,
    initialState
  } from "../../src/redux/reducers/oneExped.reducer";
  import { oneExpeditionConstants } from "../../src/redux/actions/oneExped.actions";
  
  describe("OneExpeditionReducer", () => {
    it("request", () => {
      const action = {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_REQUEST
      };
      expect(oneExpedition(initialState, action)).toEqual({
          error: null, 
          isFetching: true, 
          item: {}
        });
    });
    it("success", () => {
      const action = {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_SUCCESS,
        item: {1:1}
      };
      expect(oneExpedition(initialState, action)).toEqual({
        error: null,
        isFetching: false,
        item: action.item
      });
    });
    it("failure", () => {
      const action = {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_FAILURE,
        error: { status: 401, statusText: "Unauthorized" }
      };
      expect(oneExpedition(initialState, action)).toEqual({
        ...initialState,
        isFetching: false,
        item: {},
        status: action.error.status,
        error: action.error.statusText
      });
    });
});