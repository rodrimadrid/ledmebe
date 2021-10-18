import React, { useState, useEffect } from 'react'
import ItemList from './ItemList.js'
import './ItemListContainer.css'
import Products from '../Productos.json'
import { useParams } from "react-router-dom"

const ItemListContainer = (props) =>{
    let [marca, setMarca] = useState(props.marca)
    let [products, setProducts] = useState([])
    const { id: idCategory } = useParams();
    let styles = {
        color : '#7D2181',
        fontSize : '2em'
    }
    console.log(idCategory + 'item')
  useEffect(() => {
      
        const getProducts = new Promise((resolve, reject)=>{
            let productsList 
            if(idCategory){
                productsList = Products.filter(e => e.luz.toLowerCase() === idCategory)
            }else{
                productsList = Products
            }
            
            console.log(productsList)
            setTimeout(() => {
                resolve(productsList)
            }, 2000);
        })
   getProducts.then((result) => {
      setProducts(result) 
   })
}, [idCategory])
   
    return( 
        <div > 
            <h1 style = {styles}>
                {marca}
            </h1>
            <h3>Diseños novedosos de lámparas led e iluminarias💡</h3>
            <h4>lista de productos</h4>
            <div className = 'products'>
                <ItemList products = {products}/>
            </div>
        </div>
    )
}

export default ItemListContainer