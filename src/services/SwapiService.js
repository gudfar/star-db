
export default class SwapiService {

    _apiBaseUrl = 'https://swapi.co/api';

    async getResource (url) {
        const result = await fetch(`${this._apiBaseUrl}${url}`);
        if (!result.ok) {
            throw new Error(`${result.status}`);
        }
        return await result.json();
    }

    async getAllPeople () {
        const res = await this.getResource('/people/');
        return res.results;
    }

    getPerson (id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets () {
        const res = await this.getResource('/planets/');
        return res.results;
    }

    getPlanet (id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships () {
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship (id) {
        return this.getResource(`/starships/${id}/`);
    }
}

//
// const getResource = async (url) => {
//     const res = await fetch(url);
//     const body = await res.json();
//     return body;
// }
//
// // fetch('https://swapi.co/api/people/1')
// //     .then((response) => {
// //         return response.json();
// //     }).then((body) => {
// //         console.log(body);
// //     });
//
//
// getResource('https://swapi.co/api/people/jvbiehr433')
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((error) => {
//         console.log(error);
//     });