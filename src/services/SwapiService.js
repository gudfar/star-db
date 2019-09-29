import DataTransformer from "./DataTransformer";

export default class SwapiService {

    _apiBaseUrl = 'https://swapi.co/api';
    dataTransformer = new DataTransformer();

    getResource = async(url) => {
        const data = await fetch(`${this._apiBaseUrl}${url}`);
        if (!data.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${data.status}`)
        }
        return await data.json();
    };

     getAllPeople = async() =>  {
        const res = await this.getResource('/people/');
        return res.results.map(this.dataTransformer.transformPerson);
    };

    getPerson = async(id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this.dataTransformer.transformPerson(person);
    };

    getAllPlanets = async() => {
        const res = await this.getResource('/planets/');
        return res.results.map(this.dataTransformer.transformPlanet);
    };

    getPlanet = async(id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this.dataTransformer.transformPlanet(planet);
    };

    getAllStarships = async() => {
        const res = await this.getResource('/starships/');
        return res.results.map(this.dataTransformer.transformStarship);
    };

    getStarship = async(id) => {
        const starship = await  this.getResource(`/starships/${id}/`);
        return this.dataTransformer.transformStarship(starship);
    };
}