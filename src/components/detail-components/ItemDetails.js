import React from 'react';

import '../styles/css/item-details.css';

const ItemDetails = (props) => {

    const {imageUrl, children, item} = props;
    return (
        <div className="item-details card">
            <img className="item-image" src={imageUrl(item.id)} />
            <div className="card-body">
                <h4>{ item.name }</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, { item })
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ItemDetails;
