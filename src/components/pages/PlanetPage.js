import React, {useState} from 'react';

import {ErrorBoundary} from "../index";
import PlanetList from "../list-components/PlanetList";
import PlanetDetails from "../detail-components/PlanetDetails";

const PlanetPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const onPlanetSelected = (id) => {
        setSelectedItem(id);
    };
    return (
        <ErrorBoundary>
            <div className="row mb2">
                <div className="col-md-6">
                    <PlanetList onItemSelected={onPlanetSelected} />
                </div>
                { !selectedItem
                    ? 'Please, select item from list ...'
                    : (
                        <div className="col-md-6">
                            <PlanetDetails itemId={selectedItem}/>
                        </div>)
                }
            </div>
        </ErrorBoundary>
    );
};

export default PlanetPage;