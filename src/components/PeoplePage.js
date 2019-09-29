import React, {Component} from 'react';

import {
    ItemList,
    PersonDetails,
    ErrorBoundary
} from './index'

export default class PeoplePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 1,
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
                    <ItemList
                        onPersonSelected={this.onPersonSelected}
                        getItemList={this.props.getItemList}
                        renderItem={this.props.renderItem}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        </ErrorBoundary>
        );
    }
};