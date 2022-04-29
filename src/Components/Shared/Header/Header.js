import './Header.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to='/' className='logo-title'>
                        <img src={logo} alt=""/>
                        <h5>Mobile Point</h5>
                    </Link>
                </div>
                <div className='link-container'>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blog'>Blog</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/manageItems'>Manage Items</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/addItem'>Add Item</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/myItems'>My Items</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/login'>Login</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;