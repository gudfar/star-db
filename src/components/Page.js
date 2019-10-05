import React, {Component} from 'react';

import { ErrorBoundary } from './index'

import {PersonList} from "./list-components";
import {PersonDetails} from "./detail-components";

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: null,
        };
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <div className="row mb2">
                    <div className="col-md-6">
                        <PersonList onItemSelected={this.onPersonSelected} />
                    </div>
                    { !this.state.selectedPerson
                        ? 'Please, select item from list ...'
                        : (
                            <div className="col-md-6">
                                <PersonDetails itemId={this.state.selectedPerson}/>
                            </div>)
                    }
                </div>
            </ErrorBoundary>
        );
    }
};