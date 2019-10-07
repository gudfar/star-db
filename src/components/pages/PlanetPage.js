import React, {Component} from 'react';

import {ErrorBoundary} from "../index";
import PlanetList from "../list-components/PlanetList";
import PlanetDetails from "../detail-components/PlanetDetails";

export default class PlanetPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };
    };

    onPlanetSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <div className="row mb2">
                    <div className="col-md-6">
                        <PlanetList onItemSelected={this.onPlanetSelected} />
                    </div>
                    { !this.state.selectedItem
                        ? 'Please, select item from list ...'
                        : (
                            <div className="col-md-6">
                                <PlanetDetails itemId={this.state.selectedItem}/>
                            </div>)
                    }
                </div>
            </ErrorBoundary>
        );
    }
};