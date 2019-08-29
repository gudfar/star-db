
export default class DataTransformer {
    transformPlanet (planet) {
        return {
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }
};