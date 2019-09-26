import React, { Component } from 'react';

import './styles/css/item-list.css';
import {Spinner} from "./index";

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };
    };

    fetchItemList () {
        this.props.getItemList()
            .then((itemList) => {
                this.setState({itemList});
            });
    }

    componentDidMount() {
        this.fetchItemList();
    }

    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return (<Spinner/>)
        }
        return (
            <ul className="item-list list-group">
                {itemList.map((item, index) => (
                    <li key={index + 1}
                        className="list-group-item"
                        onClick={() => this.props.onPersonSelected(index + 1)}
                    >
                        {this.props.renderItem(item)}
                    </li>
                ))}
            </ul>
        );
    }
}
