import React from 'react';
import {NavLink} from 'react-router-dom';
function Header(){
    return(
        <header>
            <h1 className='site-title'>Polynomial Regression</h1>
            <nav>
                <NavLink activeClassName='active' className='nav-link' to="/demo">Demo</NavLink>
                <NavLink activeClassName='active' className='nav-link' to="/about">How its made</NavLink>
            </nav>
        </header>
    )
}

export default Header;