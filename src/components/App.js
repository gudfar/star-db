import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    ErrorIndicator,
    PeoplePage
} from './index'

import './styles/css/app.css';
import SwapiService from "../services/SwapiService";

export default class App extends Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        return (
            <Fragment>
                <Header />
                <RandomPlanet />
                <PeoplePage
                    getItemList={this.swapiService.getAllPeople}
                    renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
                />
            </Fragment>
        );
    }
};