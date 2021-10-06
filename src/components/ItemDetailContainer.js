import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import './ItemListContainer.css'

const ItemDetailContainer = ({itemsDetail})=>{
    let [detail, setDetail] = useState([]);


    useEffect(() => {
        const getItem = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(itemsDetail)
            }, 2000);
        })
        getItem.then((result) => {
          setDetail(result)  
          console.log(detail)
        })
        
    }, [])
    
    return (
        <div className = 'productsBtn'>

           {detail.map(item => {
                     return  <ItemDetail 
                                key = {item.id + 0.1}
                                img = {item.img}   
                                name= {item.name}
                                price = {item.price}
                                stock = {item.stock}
                                luz = {item.luz}
                                control = {item.control}
                             />
        })}
            
        </div>
    )
}
export default ItemDetailContainer