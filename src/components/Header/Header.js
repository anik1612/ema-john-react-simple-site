import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { useContext } from 'react';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className='header'>
            <img src={logo} alt="header-img"/>
            <nav>
                <Link to="/shop" className="text-decoration-none text-white">Shop</Link>
                <Link to="/review" className="text-decoration-none text-white">Order Review</Link>
                <Link to="/inventory" className="text-decoration-none text-white">Manage Inventory</Link>
                <button className="btn" onClick={() =>setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;