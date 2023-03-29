import React from "react";
import {Link} from 'react-router-dom';

import logo from '../../assets/img/pizza-logo.svg';
import {HeaderBtnCart} from './HeaderBtnCart';

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/ReactPizzaTS">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>Самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <HeaderBtnCart/>
                </div>
            </div>
        </div>
    );
};
