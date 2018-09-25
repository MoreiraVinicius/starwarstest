import {
    getAllResults
} from "./http";
import {
    getParameters
} from "@/utils/parametersByCategory";

export const getResult = (category, resolve, reject) => {
    getAllResults(
        category, 1
    ).then(res => {
        let itemsPerPage = res.data['results'].length;
        let randomPosition = Math.floor((Math.random() * res.data['count']) + 1);
        let index = randomPosition - 1;
        let position = index - ((Math.ceil(randomPosition / itemsPerPage) - 1) * itemsPerPage);
        let randomItem = Math.ceil(randomPosition / itemsPerPage);

        getAllResults(category, randomItem).then(res => {
            resolve(getParameters(category, (res.data['results'][position])));
        }).catch(err => {
            reject(err)
        })
    });
};
