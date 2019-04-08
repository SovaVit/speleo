import { expeditionService } from "../../utilities/api/expedition.service";
export const oneExpeditionConstants = {
  ONE_EXPEDITIONS_REQUEST: "ONE_EXPEDITIONS_REQUEST",
  ONE_EXPEDITIONS_SUCCESS: "ONE_EXPEDITIONS_SUCCESS",
  ONE_EXPEDITIONS_FAILURE: "ONE_EXPEDITIONS_FAILURE"
};

export function getOneExpedition(id) {
  return dispatch => {
    dispatch(request());

    expeditionService.getOne(id).then(
      item => {
        dispatch(success(item.expedition));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
}
function request() {
  return { type: oneExpeditionConstants.ONE_EXPEDITIONS_REQUEST };
}
function success(item) {
  return { type: oneExpeditionConstants.ONE_EXPEDITIONS_SUCCESS, item };
}
function failure(error) {
  return { type: oneExpeditionConstants.ONE_EXPEDITIONS_FAILURE, error };
}

export function FetchIfNeeded(id) {
  return (dispatch, getState) => {
    const post = getState().expeditions.items.find(item => item._id === id);

    if (post) {
      return dispatch(success(post));
    }
    return dispatch(getOneExpedition(id));
  };
}
