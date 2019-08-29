import React from 'react';

import './styles/css/spinner.css';

const Spinner = () => {
    return (
        <div className="lds-css">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
