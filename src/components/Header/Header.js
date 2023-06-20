import React from 'react';
import './Header.sass'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='app-container'>
                <Link to='/'>My planner v.1.0</Link>
            </div>
        </div>
    );
}

export default Header;