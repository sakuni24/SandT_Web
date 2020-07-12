import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>Assign Admin</h2>

        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Assign Admin</NavLink>
        </div>
    </header>
);

export default Header;
