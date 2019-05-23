import { caveService } from "../../utilities/api/cave.service";
export const oneCaveConstants = {
  ONE_CAVE_REQUEST: "ONE_CAVE_REQUEST",
  ONE_CAVE_SUCCESS: "ONE_CAVE_SUCCESS",
  ONE_CAVE_FAILURE: "ONE_CAVE_FAILURE"
};

export function getOneCave(id) {
  return dispatch => {
    dispatch(request());

    return caveService.getOne(id).then(
      item => {
        dispatch(success(item.cave));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
}
function request() {
  return { type: oneCaveConstants.ONE_CAVE_REQUEST };
}
function success(item) {
  return { type: oneCaveConstants.ONE_CAVE_SUCCESS, item };
}
function failure(error) {
  return { type: oneCaveConstants.ONE_CAVE_FAILURE, error };
}

export function FetchIfNeeded(id) {
  return (dispatch, getState) => {
    const post = getState().caves.items.find(item => item._id === id);

    post ? dispatch(success(post)) : dispatch(getOneCave(id));
  };
}
