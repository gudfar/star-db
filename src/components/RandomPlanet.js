import React, {Component, Fragment} from 'react';

import './styles/css/random-planet.css';
import SwapiService from "../services/SwapiService";
import { ErrorBoundary, Spinner } from "./index";
import ImageService from "../services/ImageService";

export default class RandomPlanet extends Component {

    imageService = new ImageService();

    constructor(props) {
        super(props);
        this.state = {
            id: (Math.floor(Math.random() * 25) + 2),
            planet: null,
            loading: true,
        };
    };

    fetchRandomPlanet () {
        const swapiService = new SwapiService();
        swapiService.getPlanet(this.state.id)
            .then((planet) => {
                this.setState({planet, loading: false});
            });
    };

    componentDidMount() {
        this.fetchRandomPlanet();
    }

    render() {

        if (!this.state.planet) {
            return null;
        }

        const {
            loading,
            planet: {id, name, population, rotationPeriod, diameter}
        } = this.state;

        return (
            <ErrorBoundary>
                <div className="random-planet jumbotron rounded">
                    { loading
                        ? <Spinner/>
                        : (
                            <Fragment>
                                <img className="planet-image" src={this.imageService.getPlanetImage(id)}/>
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
                        )
                    }
                </div>
            </ErrorBoundary>
        );
    }
}
