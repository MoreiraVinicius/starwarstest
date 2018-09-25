import axios from "axios";

export const getAllResults = (category, page) => {
    return axios.get("https://swapi.co/api/" + category + "/?page=" + page)
};
