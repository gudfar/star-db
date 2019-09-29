import React from 'react';

import {ErrorBoundary, RandomPlanetCard, } from "./index";


const RandomPlanet = () => {
    return (
        <div className="random-planet jumbotron rounded">
            <ErrorBoundary>
                <RandomPlanetCard/>
            </ErrorBoundary>
        </div>
    );
};

export default RandomPlanet;