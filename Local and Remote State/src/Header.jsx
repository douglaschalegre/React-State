import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'purple',
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <img alt='Tech Deals' src='/images/logo.png' />
            </Link>
          </li>
          <li>
            <NavLink to='phones' activeStyle={activeStyle}>
              Phones
            </NavLink>
          </li>
          <li>
            <NavLink to='headphones' activeStyle={activeStyle}>
              Headphones
            </NavLink>
          </li>
          <li>
            <NavLink to='cart' activeStyle={activeStyle}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
