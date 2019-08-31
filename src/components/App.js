import React, {Component} from 'react';

import {
    Header,
    RandomPlanet,
    ItemList,
    PersonDetails
} from './index'

import './styles/css/app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 1
        };
    };


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.onPersonSelected}  />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }



};