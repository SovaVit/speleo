import { caveService } from "../../utilities/api/cave.service";
export const allCaveConstants = {
  ALL_CAVE_REQUEST: "ALL_CAVE_REQUEST",
  ALL_CAVE_SUCCESS: "ALL_CAVE_SUCCESS",
  ALL_CAVE_FAILURE: "ALL_CAVE_FAILURE"
};

export function getAllCaves() {
  return dispatch => {
    dispatch(request());

    caveService.getAll().then(
   
      items => {
        dispatch(success(items));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: allCaveConstants.ALL_CAVE_REQUEST };
  }
  function success(items) {
    return { type: allCaveConstants.ALL_CAVE_SUCCESS, items };
  }
  function failure(error) {
    return { type: allCaveConstants.ALL_CAVE_FAILURE, error };
  }
}
