import React, {Component} from 'react';

import {
    ItemList,
    ItemDetails,
    ErrorBoundary
} from './index'

export default class PeoplePage extends Component {

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
                        <ItemList
                            onPersonSelected={this.onPersonSelected}
                            getItemList={this.props.getItemList}
                            renderItem={this.props.renderItem}
                        />
                    </div>
                    { !this.state.selectedPerson
                        ? null
                        : (
                            <div className="col-md-6">
                                <ItemDetails
                                    itemId={this.state.selectedPerson}
                                    getItemDetails={this.props.getItemDetails}
                                    imageUrl={this.props.getImage(this.state.selectedPerson)}
                                 />
                            </div>)
                    }

                </div>
            </ErrorBoundary>
        );
    }
};