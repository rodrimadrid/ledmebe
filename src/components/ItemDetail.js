import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { CartCntxt } from '../context/Context.js'
import ItemCount from './ItemCount.js';
import './ItemDetail.css';
const ItemDetail = ({ detail }) => {
  let [stock, setStock] = useState(detail.stock);
  let [count, setCount] = useState(1);
  let [cantidad, setCantidad] = useState(0)
  let { addToCart } = useContext(CartCntxt);


  let handleOnAdd = () => {
    if (stock === count) {
      setCantidad(cantidad += count)
      setStock(stock - count);
      setCount(0);
      addToCart(detail, cantidad)
      console.log(cantidad)

    } else {
      setCantidad(cantidad += count)
      setStock(stock - count);
      setCount(1);
      addToCart(detail, cantidad)
      console.log(cantidad)
    }
  };
  let handleMas = () => {
    stock > count ? setCount(count + 1) : console.log('Sin stock');
  };
  let handleMenos = () => {
    count > 1 ? setCount(count - 1) : console.log('...');
  };
  return (
    <div>
      {detail.stock && (
        <Card style={{ width: '18rem' }}>
         <Link to={`/`} className = 'left-arrow'>
            <FiArrowLeft />
          </Link>
          <Card.Img variant="top" src={detail?.img} />
          <Card.Body>
            <Card.Title>{detail?.name}</Card.Title>
            <Card.Text>precio: {detail?.price}</Card.Text>
            <Card.Text>
              Lámpara led con control {detail?.control} y luz tipo {detail?.luz}
            </Card.Text>
            <Card.Text></Card.Text>
            {stock !== 0 ? (
              <ItemCount
                handleOnAdd={handleOnAdd}
                handleMas={handleMas}
                handleMenos={handleMenos}
                stock={stock}
                count={count}
              />
            ) : (
              <NavLink className="itemDetail-link" to="/cart">
                <Button variant="outline-secondary" size="sm">
                  Ver Compra
                </Button>
              </NavLink>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default ItemDetail;
