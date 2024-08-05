import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className='header'>
        <h1>LOGO</h1>
        <nav className='nav'>
            <Link className='nav-link' to="/product">Product</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/cart">Cart:0</Link>     
        </nav>
    </header>
  );
}

export default Header;
