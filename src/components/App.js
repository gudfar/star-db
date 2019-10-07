import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    ErrorBoundary
} from './index'

import {PeoplePage} from "./pages";

import './styles/css/app.css';
import {ServiceContext} from "../services/context";
import SwapiService from "../services/SwapiService";
import ImageService from "../services/ImageService";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <ServiceContext.Provider value={{
                        swapiService: new SwapiService(),
                        imageService: new ImageService()
                    }}>
                        <Header />
                        <RandomPlanet />
                        <PeoplePage/>
                    </ServiceContext.Provider>
                </ErrorBoundary>
            </Fragment>
        );
    }
};