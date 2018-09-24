import { getAllResults } from "./http";

export const getResult = category => {
  new Promise((resolve, reject) => {
    getAllResults(
      "https://swapi.co/api/" + category + "/?format=json",
      [],
      resolve,
      reject
    );
  })
    .then(response => {
      let random = response[Math.floor(Math.random()*response.length)];
      console.log("response da promisse: ", random);
      return random;
    })
    .catch(err => {
      console.log("Erro na promisse: ", err);
    });
};
