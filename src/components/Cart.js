import React, { useContext } from 'react';
import { CartCntxt } from '../context/Context.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Compra from './Compra';
import './Cart.css';
const Cart = () => {
  const { cart, deleteItem } = useContext(CartCntxt);

  return (
    <div className="cart">
      <Link to={`/`} className="styles">
        <FiArrowLeft className="arrowStyles" />
        <span>Elegí tus lámparas!</span>
      </Link>
      <div className="containerStyles">
        {!cart.length && <h1>No agregaste productos</h1>}
        {cart.map((item) => {
          return (
            <div>
              <Card style={{ width: '18rem' }} key= {item.id}>
                <button onClick={() => deleteItem(item)}>x</button>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <Card.Text>
                    Lámpara led con control {item.control} y luz tipo {item.luz}
                  </Card.Text>
                  <Card.Text>
                    Cantidad: {item.quantity} Precio: {item.price}
                  </Card.Text>

                  <Card.Text>Total: {item.price * item.quantity}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <Compra />
    </div>
  );
};
export default Cart;
