import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <Header /> 
                <ul id="nav-list">
                    <li><Link to="/DashBoard">DashBoard</Link></li>
                    <li><Link to="/UserList">UserList</Link></li>
                    <li><Link to="/UserProfile">UserProfile</Link></li>
                   
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
