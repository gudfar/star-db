import React from 'react';

import {
    Header,
    RandomPlanet,
    ItemList,
    PersonDetails
} from './index'

import './css/app.css';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;