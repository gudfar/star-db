import React from 'react';

import {ErrorBoundary} from "../index";
import PersonList from "../list-components/PersonList";
import PersonDetails from "../detail-components/PersonDetails";
import { withRouter } from 'react-router-dom'

const PeoplePage = ({history, match}) => {
    return (
        <ErrorBoundary>
            <div className="row mb2">
                <div className="col-md-6">
                    <PersonList onItemSelected={(id) => history.push(id)} />
                </div>
                         { !match.params.id
                             ? 'Please, select item from list ...'
                             : (
                                 <div className="col-md-6">
                                     <PersonDetails itemId={match.params.id}/>
                                 </div>)
                         }
            </div>
                </ErrorBoundary>
            );
};

export default withRouter(PeoplePage);