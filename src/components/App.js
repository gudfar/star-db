import React, {Component, Fragment} from 'react';

import ImageService from "../services/ImageService";
import SwapiService from "../services/SwapiService";

import {
    Header,
    RandomPlanet,
    Page,
    ErrorBoundary
} from './index'

import './styles/css/app.css';
import {ServiceContext} from "../services/context";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <ServiceContext.Provider value={{swapiService: new SwapiService(), imageService: new ImageService()}}>
                        <Header />
                        <RandomPlanet />
                        <Page/>
                    </ServiceContext.Provider>
                </ErrorBoundary>
            </Fragment>
        );
    }
};