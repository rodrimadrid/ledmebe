import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { CartCntxt } from '../context/Context.js';
import './Cart.css';

function CartWidget() {
  let { cart, quantyItems } = useContext(CartCntxt);

  return (
    <>
      {cart.length !== 0 && (
        <Link to="/cart">
          <BiCart size={32} color={'red'} />
          <span  className='cart-widget'> {quantyItems}</span>
        </Link>
      )}
    </>
  );
}
export default CartWidget;
