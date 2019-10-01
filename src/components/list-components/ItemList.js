import React from 'react';

import '../styles/css/item-list.css';

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

export default ItemList;