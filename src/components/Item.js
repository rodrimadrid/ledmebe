import React, { useContext, useState } from 'react';
import { CartCntxt } from '../context/Context.js'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./item.css"
const Item = ({id, name, price, img, stock, luz})=>{

const { cart, setCart } = useContext(CartCntxt)




  return (
    <> 
      <Card key= {id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src = {img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
             Precio: {price}
          </Card.Text>
          <NavLink className= 'item-link' to={`/item/${id}`}>
            <Button variant="outline-info">
              Ver detalle 
            </Button>
          </NavLink>
        </Card.Body>
      </Card>
    </>
  )

}

export default Item