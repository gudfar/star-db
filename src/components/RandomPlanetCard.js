import React, {Fragment, useEffect, useState} from 'react';

import './styles/css/random-planet.css';
import { Spinner } from './index';
import PropTypes from 'prop-types';

const RandomPlanetCard = ({imageService, swapiService}) => {

    const [id] = useState(Math.floor(Math.random() * 25) + 2);
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    //componentDidMount
    useEffect(() => {
        const fetchRandomPlanet = () => {
            swapiService.getPlanet(id)
                .then((planet) => {
                    setPlanet(planet);
                    setLoading(false);
                });
        };
        fetchRandomPlanet();
    }, [id, swapiService]);


    if (loading) {
        return <Spinner/>;
    }

    const {name, population, rotationPeriod, diameter} = planet;

    return (
        <Fragment>
            <img className="planet-image" src={imageService.getPlanetImage(id)}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

RandomPlanetCard.propTypes = {
    imageService: PropTypes.object.isRequired,
    swapiService: PropTypes.object.isRequired,
};

export default RandomPlanetCard;
