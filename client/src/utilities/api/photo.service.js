import authHeader from "../helpers/auth-header";
import handleResponse from "../helpers/handleResponse";

export const photoService = {
  getAll,
  create,
  deletePhoto
};
async function getAll(id) {
  const requestOptions = {
    method: "GET"
  };
  const response = await fetch(`/speleo/photo/?caveId=${id}`, requestOptions);
  const items = await handleResponse(response);

  return items;
}
async function create(photo, token) {
  const requestOptions = {
    method: "POST",
    headers: {
      "enctype":"multipart/form-data",
      Authorization: `Bearer ${token}`
    },
    body: photo
  };
  const response = await fetch(`/speleo/photo`, requestOptions);
  const items = await handleResponse(response);

  return items;
}
async function deletePhoto(id, token) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(token)
  };
  const response = await fetch(`/speleo/photo/${id}`, requestOptions);
  const item = await handleResponse(response);

  return item;
}
