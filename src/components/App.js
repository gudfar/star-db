import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    ErrorBoundary
} from './index'

import {PeoplePage, PlanetPage, StarshipPage} from "./pages";

import './styles/css/app.css';
import {ServiceContext} from "../services/context";
import SwapiService from "../services/SwapiService";
import ImageService from "../services/ImageService";
import {BrowserRouter, Route} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <ServiceContext.Provider value={{
                        swapiService: new SwapiService(),
                        imageService: new ImageService()
                    }}>
                        <BrowserRouter>
                            <Header />
                            <RandomPlanet />

                            <Route path={'/'} exact render={() => <h2>Welcome to Star DB</h2>}/>
                            <Route path={'/people'} component={PeoplePage}/>
                            <Route path={'/planets'} component={PlanetPage}/>
                            <Route path={'/starships'} component={StarshipPage}/>

                        </BrowserRouter>
                    </ServiceContext.Provider>
            </ErrorBoundary>
            </Fragment>
        );
    }
};