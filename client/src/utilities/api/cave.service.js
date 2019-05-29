import authHeader from "../helpers/auth-header";
import handleResponse from "../helpers/handleResponse";

export const caveService = {
  getAll,
  getOne,
  create,
  update,
  deleteCave
};
async function getAll() {
  const requestOptions = {
    method: "GET"
  };
  const response = await fetch(`/speleo/cave`, requestOptions);
  const items = await handleResponse(response);

  return items;
}
async function getOne(id) {
  const requestOptions = {
    method: "GET"
  };
  const response = await fetch(`/speleo/cave/${id}`, requestOptions);
  const item = await handleResponse(response);

  return item;
}
async function create(cave, token) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(token),
    body: JSON.stringify(cave)
  };
  const response = await fetch(`/speleo/cave`, requestOptions);
  const items = await handleResponse(response);

  return items;
}
async function update(id, cave, token) {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(token),
    body: JSON.stringify(cave)
  };
  const response = await fetch(`/speleo/cave/${id}`, requestOptions);
  const items = await handleResponse(response);

  return items;
}
async function deleteCave(id, token) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(token)
  };
  const response = await fetch(`/speleo/cave/${id}`, requestOptions);
  const item = await handleResponse(response);

  return item;
}
