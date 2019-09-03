import React, { Component } from 'react';

import './styles/css/person-details.css';
import SwapiService from "../services/SwapiService";
import {Spinner} from "./index";

export default class PersonDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: null,
            loading: true
        };
    };


    componentDidMount() {
        this.fetchPerson();
    }

    fetchPerson () {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        const swapiService = new SwapiService();
        swapiService.getPerson(personId)
            .then((person) => {
                this.setState({person, loading: false});
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({loading: true});
            this.fetchPerson();
        }
    }

    render() {

        if (this.state.loading) {
            return <Spinner/>
        }

        const {person: {name, gender, birthYear, eyeColor}} = this.state;

        return (
            <div className="person-details card">
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`} />
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
