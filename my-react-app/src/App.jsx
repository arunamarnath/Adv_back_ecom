import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ensure correct path

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/product" element={<div>Product Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
    </>
  );
};

export default App;
