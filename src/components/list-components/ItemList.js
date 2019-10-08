import React from 'react';

import PropTypes from 'prop-types';
import '../styles/css/item-list.css';

const ItemList = (props) => {
    const { itemList, onItemSelected, children } = props;
    return (
        <ul className="item-list list-group">
            {itemList.map((item) => (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => onItemSelected(item.id)}>
                    { children(item) }
                </li>
            ))}
        </ul>
    );
};

ItemList.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;