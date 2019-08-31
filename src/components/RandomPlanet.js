import React, {Component, Fragment} from 'react';

import './styles/css/random-planet.css';
import SwapiService from "../services/SwapiService";
import {ErrorIndicator, Spinner} from "./index";

export default class RandomPlanet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planet: {
                id: (Math.floor(Math.random() * 25) + 2)
            },
            loading: true,
            error: false
        };
    };

    onRandomPlanetLoaded = (planet) => {
        this.setState(({planet: {id}}) => ({
            planet: {id, ...planet},
            loading: false
        }));
    };

    fetchRandomPlanet () {
        const swapiService = new SwapiService();
        swapiService.getPlanet(this.state.planet.id)
            .then(this.onRandomPlanetLoaded)
            .catch(this.onError);
    };

    componentDidMount() {
        this.fetchRandomPlanet();
    }

    onError = (error) =>  {
        this.setState({error: true, loading: false});
    };

    render() {
        const {
            loading,
            error,
            planet: {id, name, population, rotationPeriod, diameter}
        } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                {error ? (
                    <ErrorIndicator/>
                ) : (
                    loading ? <Spinner/>
                    : <Fragment>
                            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                            <div>
                                <h4>{name}</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="term">Population</span>
                                        <span>{population}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="term">Rotation Period</span>
                                        <span>{rotationPeriod}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="term">Diameter</span>
                                        <span>{diameter}</span>
                                    </li>
                                </ul>
                            </div>
                        </Fragment>
                )}
            </div>
        );
    }
}
