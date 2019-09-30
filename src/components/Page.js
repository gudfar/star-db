import React, {Component} from 'react';

import {
    ItemList,
    ItemDetails,
    ErrorBoundary, DetailRow
} from './index'

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
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getItemList={this.props.getItemList}
                            renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
                        />
                    </div>
                    { !this.state.selectedPerson
                        ? 'Please, select item from list ...'
                        : (
                            <div className="col-md-6">
                                <ItemDetails
                                    itemId={this.state.selectedPerson}
                                    getItemDetails={this.props.getItemDetails}
                                    imageUrl={this.props.getImage(this.state.selectedPerson)}
                                >
                                    <DetailRow field={'gender'} label={'Gender'}/>
                                    <DetailRow field={'birthYear'} label={'Birth Year'}/>
                                    <DetailRow field={'eyeColor'} label={'Eye Color'}/>
                                </ItemDetails>
                            </div>)
                    }
                </div>
            </ErrorBoundary>
        );
    }
};