import { caveService } from "../../utilities/api/cave.service";
export const oneCaveConstants = {
  ONE_CAVE_REQUEST: "ONE_CAVE_REQUEST",
  ONE_CAVE_SUCCESS: "ONE_CAVE_SUCCESS",
  ONE_CAVE_FAILURE: "ONE_CAVE_FAILURE"
};

export function getOneCave(id) {
  return dispatch => {
    dispatch(request());

    caveService.getOne(id).then(
      //change service
      item => {
        dispatch(success(item));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: oneCaveConstants.ONE_CAVE_REQUEST };
  }
  function success(item) {
    return { type: oneCaveConstants.ONE_CAVE_SUCCESS, item };
  }
  function failure(error) {
    return { type: oneCaveConstants.ONE_CAVE_FAILURE, error };
  }
}
