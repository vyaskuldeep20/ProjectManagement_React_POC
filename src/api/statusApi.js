import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/projects/";
const baseUrl="http://localhost:3001"+"/statuses/";

export function getstatus() {
  return fetch(baseUrl,{method: 'GET',
  headers: {
    Accept: 'application/json',
  }})
    .then(handleResponse)
    .catch(handleError);
}