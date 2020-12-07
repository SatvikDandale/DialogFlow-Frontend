import axios from "axios";

// prettier-ignore
export const serverBaseURL  = `https://dialogflow-server-nodejs.herokuapp.com`;
// prettier-ignore
axios.defaults.baseURL      = serverBaseURL;

// prettier-ignore
var instance = axios.create({
  url     : "/",
  baseURL : serverBaseURL,
  timeout : 4000,
});

// A generalized method for HTTP REST APIs
export function apiCall(method, path, data = null) {
  return new Promise((resolve, reject) => {
    path = path.replace(/\/\//g, "/");
    // GET REQUEST
    if (method === "GET")
      return instance
        .get(path)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    // POST REQUEST
    else
      instance
        .post(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
  });
}
