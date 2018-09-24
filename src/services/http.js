import axios from "axios";

export const getAllResults = (url, results, resolve, reject) => {
  axios
    .get(url)
    .then(response => {
      const retrivedResults = results.concat(response.data.results);
      if (response.data.next !== null) {
        getAllResults(response.data.next, retrivedResults, resolve, reject);
      } else {
        resolve(retrivedResults);
      }
    })
    .catch(error => {
      reject(error);
    });
};
