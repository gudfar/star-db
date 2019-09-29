import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    PeoplePage, ErrorBoundary
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
                    <PeoplePage
                        getItemList={this.swapiService.getAllPeople}
                        renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
                        getItemDetails={this.swapiService.getPerson}
                        getImage={this.imageService.getPersonImage}
                    />
                </ErrorBoundary>
            </Fragment>
        );
    }
};