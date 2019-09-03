import React, {Component} from 'react';

import {
    ItemList,
    PersonDetails, ErrorIndicator
} from './index'

export default class PeoplePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 1,
            hasError: false
        };
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch () {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onPersonSelected={this.onPersonSelected}  />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
};