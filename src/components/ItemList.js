import React from 'react';
import Item from './Item.js';



const ItemList = ({products})=>{
console.log(products )

return (
   <div className= 'detail-products'>
        {products ?
            products.map(item => {
                  return <Item key = {item.id}
                              id= {item.id}
                              name = {item.name}
                              price = {item.price}
                              img = {item.img}/>
            }): (
            <h2>Cargando...</h2>
            )
         }
   </div>
) 
}
export default ItemList


