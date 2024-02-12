import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">Your Logo or Project Name</Link>
        </div>
    );
};

export default Header;
