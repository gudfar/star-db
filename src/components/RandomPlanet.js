import React from 'react';

import {ErrorBoundary, RandomPlanetCard, } from "./index";
import {ServiceContext} from "../services/context";

const RandomPlanet = () => {
    return (
        <div className="random-planet jumbotron rounded">
            <ErrorBoundary>
                <ServiceContext.Consumer>
                    {
                        ({imageService, swapiService}) => (
                            <RandomPlanetCard
                                imageService={imageService}
                                swapiService={swapiService}
                            />
                        )
                    }
                </ServiceContext.Consumer>
            </ErrorBoundary>
        </div>
    );
};

export default RandomPlanet;