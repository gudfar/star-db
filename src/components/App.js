import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    Page,
    ErrorBoundary
} from './index'

import './styles/css/app.css';

export default class App extends Component {
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