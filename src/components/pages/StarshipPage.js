import React, {Component} from 'react';

import {ErrorBoundary} from "../index";
import StarshipList from "../list-components/StarshipList";
import StarshipDetails from "../detail-components/StarshipDetails";

export default class StarshipPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };
    };

    onStarshipSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <div className="row mb2">
                    <div className="col-md-6">
                        <StarshipList onItemSelected={this.onStarshipSelected} />
                    </div>
                    { !this.state.selectedItem
                        ? 'Please, select item from list ...'
                        : (
                            <div className="col-md-6">
                                <StarshipDetails itemId={this.state.selectedItem}/>
                            </div>)
                    }
                </div>
            </ErrorBoundary>
        );
    }
};