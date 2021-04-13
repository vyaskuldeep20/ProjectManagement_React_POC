import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/projects/";
const baseUrl="http://localhost:3001"+"/projects/";

export function getProjects() {
  return fetch(baseUrl,{method: 'GET',
  headers: {
    Accept: 'application/json',
  }})
    .then(handleResponse)
    .catch(handleError);
}

export function getProject(id) {
  const url=baseUrl+id
  return fetch(url,{method: 'GET',
  headers: {
    Accept: 'application/json',
  }})
    .then(handleResponse)
    .catch(handleError);
}

export function saveProject(project) {
  return fetch(baseUrl + (project.id || ""), {
    method: project.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(project)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProject(projectId) {
  return fetch(baseUrl + projectId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
