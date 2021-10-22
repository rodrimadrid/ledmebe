import React from 'react';
import Item from './Item.js';
import { Spinner } from 'react-bootstrap';


const ItemList = ({products})=>{
console.log(products)
return (
   <div className= 'detail-products'>
        { products ?
            products.map(item => {
                  return <Item key = {item.id}
                              id= {item.id}
                              name = {item.name}
                              price = {item.price}
                              img = {item.img}/>
            }):(
            <Spinner
               className="spinner"
               animation="border"
               variant="secondary"
            
            />
            )
         }
   </div>
) 
}
export default ItemList


