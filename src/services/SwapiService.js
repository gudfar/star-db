import DataTransformer from "./DataTransformer";

export default class SwapiService {

    _apiBaseUrl = 'https://swapi.co/api';
    dataTransformer = new DataTransformer();

    async getResource (url) {
        const data = await fetch(`${this._apiBaseUrl}${url}`);
        if (!data.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${data.status}`)
        }
        return await data.json();
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
        return res.results.map(this.dataTransformer.transformPlanet);
    }

    async getPlanet (id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this.dataTransformer.transformPlanet(planet);
    }

    async getAllStarships () {
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship (id) {
        return this.getResource(`/starships/${id}/`);
    }
}