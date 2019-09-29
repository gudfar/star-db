
export default class DataTransformer {
    /**
     * @param planet
     * @returns {{rotationPeriod: *, diameter: *, name: *, id: string, population: *}}
     */
    transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    /**
     * @param person
     * @returns {{gender: *, eyeColor: *, birthYear: *, name: *, id}}
     */
    transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        };
    };

    /**
     * @param starship
     * @returns {{passengers: *, name: *, length: *, model: *, id: (string|*), costInCredits: *, cargoCapacity: *, manufacturer: *, crew: *}}
     * @private
     */
    transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    /**
     * @param url
     * @returns {string | *}
     * @private
     */
    _extractId = (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    };
};