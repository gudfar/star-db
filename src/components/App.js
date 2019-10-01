import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    Page, ErrorBoundary
} from './index'

import './styles/css/app.css';
import SwapiService from "../services/SwapiService";
import ImageService from "../services/ImageService";

export default class App extends Component {
    swapiService = new SwapiService();
    imageService = new ImageService();

    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <Header />
                    <RandomPlanet />
                    <Page/>
                </ErrorBoundary>
            </Fragment>
        );
    }
};