import React, {useContext} from 'react';

import {ErrorBoundary, RandomPlanetCard, } from "./index";
import {ServiceContext} from "../services/context";

const RandomPlanet = () => {
    const services = useContext(ServiceContext);
    return (
        <div className="random-planet jumbotron rounded">
            <ErrorBoundary>
                <RandomPlanetCard {...services}/>
            </ErrorBoundary>
        </div>
    );
};

export default RandomPlanet;