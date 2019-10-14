import React, {Component, Fragment} from 'react';

import {
    Header,
    RandomPlanet,
    ErrorBoundary
} from './index'

import {LoginPage, PeoplePage, PlanetPage, SecretPage, StarshipPage} from "./pages";

import './styles/css/app.css';
import {ServiceContext} from "../services/context";
import SwapiService from "../services/SwapiService";
import ImageService from "../services/ImageService";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StarshipDetails} from "./detail-components";

export default class App extends Component {

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({isLoggedIn: true});
    };

    render() {
        const {isLoggedIn} = this.state;
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

                            <Switch>
                                <Route path={'/'} exact render={() => <h2>Welcome to Star DB</h2>}/>
                                <Route path={'/people/:id?'} component={PeoplePage}/>
                                <Route path={'/planets'} component={PlanetPage}/>
                                <Route path={'/starships/'} exact component={StarshipPage}/>
                                <Route path={'/starships/:id'} exact render={({match: {params: {id}}}) => <StarshipDetails itemId={id}/>}/>
                                <Route path="/login" render={() => (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)}/>
                                <Route path="/secret" render={() => (<SecretPage isLoggedIn={isLoggedIn}/>)}/>

                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>

                        </BrowserRouter>
                    </ServiceContext.Provider>
            </ErrorBoundary>
            </Fragment>
        );
    }
};