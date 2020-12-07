import { apiCall, serverBaseURL } from "./apiService";

export function checkServer() {
  return apiCall("GET", serverBaseURL + "/");
}

export function getIntents() {
  return apiCall("GET", serverBaseURL + "/getAllIntents");
}

export function sendQuery(queryObject) {
  return apiCall("POST", serverBaseURL + "/query", queryObject);
}
