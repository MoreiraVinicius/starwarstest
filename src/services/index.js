import {
  getAllResults
} from "./http";
import {
  getParameters
} from "@/utils/parametersByCategory";

export const getResult = (category, mainResolve, mainReject) => {
  new Promise((resolve, reject) => {
      getAllResults(
        "https://swapi.co/api/" + category + "/?format=json",
        [],
        resolve,
        reject
      );
    })
    .then(response => {
      let random = response[Math.floor(Math.random() * response.length)];
      let result = getParameters(category, random);
      return mainResolve(result);
    })
    .catch(err => {
      mainReject(err)
    });
};