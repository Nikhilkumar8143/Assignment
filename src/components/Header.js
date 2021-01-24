/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import cart from '../assets/img/cart.png'

const Header = (props) => {
    return (
        <header className="flex-style">
            <a className="brand-name">
                AMTICA
            </a>
            <div className="header-menu">
                <button className="login">
                    Login / Sign-up
                </button>
                <button>
                    <span className="cart-text">Cart</span>
                    <img className="cart-img" src={cart}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
