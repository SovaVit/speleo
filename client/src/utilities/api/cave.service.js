//import authHeader from "../helpers/auth-header";
import handleResponse from "../helpers/handleResponse";

export const caveService = {
    getAll,
    getOne
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