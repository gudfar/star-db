import React, {Component} from 'react';

import {
    ErrorBoundary, DetailRow
} from './index'

import { PersonList } from "./list-components";
import { PersonDetails} from "./detail-components";

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
                        <PersonList
                            renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
                            onItemSelected={this.onPersonSelected}
                        />
                    </div>
                    { !this.state.selectedPerson
                        ? 'Please, select item from list ...'
                        : (
                            <div className="col-md-6">
                                <PersonDetails
                                    itemId={this.state.selectedPerson}
                                    getItemDetails={this.props.getItemDetails}
                                    imageUrl={this.props.getImage(this.state.selectedPerson)}
                                >
                                    <DetailRow field={'gender'} label={'Gender'}/>
                                    <DetailRow field={'birthYear'} label={'Birth Year'}/>
                                    <DetailRow field={'eyeColor'} label={'Eye Color'}/>
                                </PersonDetails>
                            </div>)
                    }
                </div>
            </ErrorBoundary>
        );
    }
};