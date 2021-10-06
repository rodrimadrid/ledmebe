import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({id, name, price, img, stock, luz})=>{

return (
    <> 
      <Card key= {id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src = {img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          Precio: {price}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </>
  )

}

export default Item