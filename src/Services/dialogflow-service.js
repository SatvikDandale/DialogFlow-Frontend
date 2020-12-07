import { apiCall } from "./apiService";

export function checkServer() {
  return apiCall("GET", "/");
}

export function getIntents() {
  return apiCall("GET", "/getAllIntents");
}

export function sendQuery(queryObject) {
  return apiCall("POST", "/query", queryObject);
}
