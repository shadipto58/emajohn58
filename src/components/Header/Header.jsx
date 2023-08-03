/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import logo from './../../assets/images/Logo.svg'

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>


            <nav>
                <ul>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;