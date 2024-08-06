import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import '../components/ProductCard.module.css'; // Make sure the path is correct

const Products = (props) => {
    const{setCart} = props
  return (
    <div className="products-container">
      {PRODUCTS.map((item) => (
        <ProductCard key={item.id} item={item} setCart={setCart} />
      ))}
    </div>
  );
}

export default Products;
