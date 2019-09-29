import React, { Component } from 'react';

import './styles/css/item-details.css';
import {Spinner} from "./index";

export default class ItemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            loading: true
        };
    };

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem () {
        const { itemId } = this.props;
        if (!itemId) {
            return;
        }
        this.props.getItemDetails(itemId)
            .then((item) => {
                this.setState({item, loading: false});
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({loading: true});
            this.fetchItem();
        }
    }

    render() {

        if (this.state.loading) {
            return <Spinner/>
        }

        const {item: {name, gender, birthYear, eyeColor}} = this.state;

        return (
            <div className="item-details card">
                <img className="item-image" src={this.props.imageUrl} />
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
