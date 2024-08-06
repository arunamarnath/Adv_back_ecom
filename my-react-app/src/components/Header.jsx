import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className='header'>
      <h1>LOGO</h1>
      <nav className='nav'>
        <Link className='nav-link' to="/product">Products</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/cart">Cart: {cartItems.length}</Link>     
      </nav>
    </header>
  );
}

export default Header;
