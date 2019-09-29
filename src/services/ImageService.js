
export default class ImageService {

    _imageBaseUrl = 'https://starwars-visualguide.com/assets/img';

    getPersonImage = (id) => {
        return `${this._imageBaseUrl}/characters/${id}.jpg`;
    }

    getStarshipImage = (id) => {
        return `${this._imageBaseUrl}/starships/${id}.jpg`;
    }

    getPlanetImage = (id) => {
        return `${this._imageBaseUrl}/planets/${id}.jpg`;
    }
};