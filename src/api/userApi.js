import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/users/";
const baseUrl="http://localhost:3001"+"/users/";

export function getUsers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getUser(id) {
  const url=baseUrl+id
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrl + (user.id || ""), {
    method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUser(userId) {
  return fetch(baseUrl + userId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
