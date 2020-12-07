import axios from "axios";

export const serverBaseURL = `https://dialogflow-server-nodejs.herokuapp.com`;

// A generalized method for HTTP REST APIs
export function apiCall(method, path, data = null) {
  return new Promise((resolve, reject) => {
    path = path.replace(/\/\//g, "/");
    return axios[method.toLowerCase()](path, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
