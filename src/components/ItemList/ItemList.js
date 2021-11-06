import React from 'react';
import Item from '../Item/Item.js';
import { Spinner } from 'react-bootstrap';
import './ItemList.css'

const ItemList = ({items})=>{
return (
   <div className= 'detail-products'>
        { items ?
            items.map(item => {
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


