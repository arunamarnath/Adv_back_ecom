import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ensure correct path
import Products from './components/Products';
import store from './redux/store';
import {Provider} from "react-redux"
const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
    <Provider store={store}>
      <Header cartLength={cart.length} />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/product" element={<Products setCart={setCart} />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
      </Provider>
    </>
  );
};

export default App;
