import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    PeoplePage, ErrorBoundary
} from './index'

import './styles/css/app.css';
import SwapiService from "../services/SwapiService";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <Header />
                    <RandomPlanet />
                    <PeoplePage
                        getItemList={this.swapiService.getAllPeople}
                        renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
                    />
                </ErrorBoundary>
            </Fragment>
        );
    }
};