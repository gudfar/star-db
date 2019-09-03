import React, {Component} from 'react';

import {
    Header,
    RandomPlanet,
    ErrorIndicator,
    PeoplePage
} from './index'

import './styles/css/app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage/>
            </div>
        );
    }
};