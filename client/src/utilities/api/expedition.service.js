import authHeader from "../helpers/auth-header";
import handleResponse from "../helpers/handleResponse";

export const expeditionService = {
    getAll,
    getOne, 
    create,
    update,
    deleteExpedition
  };
  async function getAll() {
    const requestOptions = {
      method: "GET"
    };
    const response = await fetch(`/speleo/expedition`, requestOptions);
    const items = await handleResponse(response);
  
    return items;
  }
  async function getOne(id) {
    const requestOptions = {
      method: "GET"
    };
    const response = await fetch(`/speleo/expedition/${id}`, requestOptions);
    const item = await handleResponse(response);
  
    return item;
  }
  async function create(expedition, token) {
    
    const requestOptions = {
      method: "POST",
      headers: authHeader(token),
      body: JSON.stringify(expedition)
    };
    const response = await fetch(`/speleo/expedition`, requestOptions);
    const items = await handleResponse(response);
  
    return items;
  }
  async function update(id, expedition, token) {
    
    const requestOptions = {
      method: "PATCH",
      headers: authHeader(token),
      body: JSON.stringify(expedition)
    };
    const response = await fetch(`/speleo/expedition/${id}`, requestOptions);
    const items = await handleResponse(response);
  
    return items;
  }
  async function deleteExpedition(id, token) {
    const requestOptions = {
      method: "DELETE",
      headers: authHeader(token)
    };
    const response = await fetch(`/speleo/expedition/${id}`, requestOptions);
    const item = await handleResponse(response);
  
    return item;
  }