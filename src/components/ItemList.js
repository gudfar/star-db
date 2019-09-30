import React from 'react';

import { withData } from './hoc-helpers';
import './styles/css/item-list.css';
import SwapiService from "../services/SwapiService";

const { getAllPeople } = new SwapiService();

const ItemList = (props) => {
    const { itemList, onItemSelected, renderItem } = props;
    return (
        <ul className="item-list list-group">
            {itemList.map((item) => (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => onItemSelected(item.id)}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );
};

export default withData(ItemList, getAllPeople);