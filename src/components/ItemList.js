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
        console.log(itemList);
        return (
            <ul className="item-list list-group">
                {itemList.map((item) => (
                    <li key={item.id}
                        className="list-group-item"
                        onClick={() => this.props.onPersonSelected(item.id)}
                    >
                        {this.props.renderItem(item)}
                    </li>
                ))}
            </ul>
        );
    }
}
