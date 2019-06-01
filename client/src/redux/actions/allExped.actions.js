import { expeditionService } from "../../utilities/api/expedition.service";
import { userConstants } from "./user.actions";
export const allExpeditionConstants = {
  ALL_EXPEDITIONS_REQUEST: "ALL_EXPEDITIONS_REQUEST",
  ALL_EXPEDITIONS_SUCCESS: "ALL_EXPEDITIONS_SUCCESS",
  ALL_EXPEDITIONS_FAILURE: "ALL_EXPEDITIONS_FAILURE",
  DELETE_EXPEDITIONS_SUCCESS: "DELETE_EXPEDITIONS_SUCCESS",
  CREATE_EXPEDITIONS_SUCCESS: "CREATE_EXPEDITIONS_SUCCESS",
  UPDATE_EXPEDITIONS_SUCCESS: "UPDATE_EXPEDITIONS_SUCCESS"
};

export function getAllExpeditions(start) {
  return dispatch => {
    dispatch(request());
    return expeditionService.getAll(start).then(
      items => {
        dispatch(allSuccess(items.expedition,items.countRecords));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
}
export function deleteExpedition(id) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return expeditionService.deleteExpedition(id, token).then(
      item => {
        dispatch(deleteSuccess(item.expedition));
      },
      error => {
        dispatch(errorHandler(error));
      }
    );
  };
}
export function setExpedition(expedition) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return expeditionService.create(expedition, token).then(
      item => {
        dispatch(createSuccess(item.expedition));
      },
      error => {
       dispatch(errorHandler(error));
      }
    );
  };
}
export function updateExpedition(id, expedition) {
  return (dispatch, getState) => {
    const token = getState().user.token;

    return expeditionService.update(id, expedition, token).then(
      item => {
        dispatch(updateSuccess(item.expedition));
      },
      error => {
       dispatch(errorHandler(error));
      }
    );
  };
}
function request() {
  return { type: allExpeditionConstants.ALL_EXPEDITIONS_REQUEST };
}
function allSuccess(items, countRecords) {
  return { type: allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS, items, countRecords };
}
function failure(error) {
  return { type: allExpeditionConstants.ALL_EXPEDITIONS_FAILURE, error };
}
function deleteSuccess(item) {
  return { type: allExpeditionConstants.DELETE_EXPEDITIONS_SUCCESS, item };
}
function createSuccess(item) {
  return {
    type: allExpeditionConstants.CREATE_EXPEDITIONS_SUCCESS,
    item
  };
}
function updateSuccess(item) {
  return {
    type: allExpeditionConstants.UPDATE_EXPEDITIONS_SUCCESS,
    item
  };
}
export function errorHandler(error) {
  return dispatch => {
    if (error.status === 401) {
      return (dispatch(failure(error)), dispatch({ type: userConstants.LOGOUT }));
    }
    return dispatch(failure(error));
  };
};
function shouldFetchPosts(state) {
  const { isFetching } = state.expeditions;
const result = isFetching ? false : true ;
return result;
}

export function fetchPostsIfNeeded(start) {
  return (dispatch, getState) => {
       shouldFetchPosts(getState()) ? dispatch(getAllExpeditions(start)) : Promise.resolve();
  };
}
