import React from 'react';

import './styles/css/header.css';
import {Link} from "react-router-dom";

const Header = () => {

    const list = {
        '/people/': 'People',
        '/planets/': 'Planets',
        '/starships/': 'Starships',
        '/login': 'Login',
        '/secret': 'Secret',
    };

    return (
        <div className="header d-flex">
            <h3>
                <Link to={'/'}>Star DB</Link>
            </h3>
            <ul className="d-flex">
                {Object.keys(list).map((key) =>
                    <li key={key}>
                        <Link to={key}>{list[key]}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Header;