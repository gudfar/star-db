import React, {Component} from 'react';

import {ErrorBoundary} from "../index";
import PersonList from "../list-components/PersonList";
import PersonDetails from "../detail-components/PersonDetails";

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <div className="row mb2">
                    <div className="col-md-6">
                        <PersonList onItemSelected={this.onPersonSelected} />
                    </div>
                     { !this.state.selectedItem 
                         ? 'Please, select item from list ...' 
                         : ( 
                             <div className="col-md-6"> 
                                 <PersonDetails itemId={this.state.selectedItem}/> 
                             </div>) 
                     } 
                </div>
            </ErrorBoundary>
        );
    }
};