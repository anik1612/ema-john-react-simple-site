import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import { useContext } from 'react';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory()

    const handleLogin = () => {
        history.push('/login');
        setLoggedInUser({})
    }

    return (
        <div className='header'>
            <Link to='/'><img src={logo} alt="header-img" />
            </Link>            <nav>
                <Link to="/shop" className="text-decoration-none text-white">Shop</Link>
                <Link to="/review" className="text-decoration-none text-white">Order Review</Link>
                <Link to="/inventory" className="text-decoration-none text-white">Manage Inventory</Link>
                <Link className="btn" onClick={handleLogin}>{loggedInUser.email || loggedInUser.name ? `${loggedInUser.name.slice(0,5)}/Logout` : 'Login'}</Link>
            </nav>
        </div>
    );
};

export default Header;