import React from 'react';
import Products from './Item.js';
import ItemCount from './ItemCount.js';
import { Card } from 'react-bootstrap';

const ItemList = ()=>{

const getItem =  new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        resolve(Products)
                    }, 2000);
                  });


getItem.then(response =>{ 
    console.log('lista : ' + Products.map( i => i.name))

})
return (
  <>
    {Products.map( item => 
    <Card key= {item.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src= {item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.luz}
        </Card.Text>
        <ItemCount stock=  {item.stock} initial= "1" />
      </Card.Body>
    </Card>
    
    )}
  </>
);
}
export default ItemList