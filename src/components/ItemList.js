import React from 'react';
import Item from './Item.js';



const ItemList = ({products})=>{
console.log(products )

return (
   <div>
        {products.map(item => {
            return <Item key = {item.id}
                         id= {item.id}
                         name = {item.name}
                         price = {item.price}
                         img = {item.img}/>
        })}
   </div>
) 
}
export default ItemList


