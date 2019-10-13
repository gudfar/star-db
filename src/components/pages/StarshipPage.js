import React from 'react';

import {ErrorBoundary} from "../index";
import StarshipList from "../list-components/StarshipList";
import { withRouter } from 'react-router-dom'


const StarshipPage = ({history}) => {
    return (
        <ErrorBoundary>
            <div className="row mb2">
                <div className="col-md-12">
                    <StarshipList onItemSelected={(id) => history.push(id)} />
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default withRouter(StarshipPage);