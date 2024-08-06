import React from 'react';
import { addItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ item, setCart }) => {
  const { image, title, description, price } = item;
  const dispatch = useDispatch();

  const handleAdd = () => {
    
    console.log("item added", item);
    // setCart(prev => [...prev, item]);
    dispatch(addItem(item)) ;
  };

  return (
    <div className='product-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>Price:{price}$</div>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
