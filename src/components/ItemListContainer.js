import React, { useState, useEffect } from 'react'
import ItemList from './ItemList.js'
import ItemDetailContainer from "./ItemDetailContainer.js";
import './ItemListContainer.css'

const ItemListContainer = (props) =>{
    let [marca, setMarca] = useState(props.marca)
    let [products, setProducts] = useState([])
    let styles = {
        color : '#7D2181',
        fontSize : '2em'
    }
    const Products = [
    {"id": 1, "name": "Eclipse", "price": 7000, "luz": "Cálida", "control": "dimmer", "stock": 3, "img": "../src/components/assets/corner.jpeg"},
    {"id": 2, "name": "Quadro", "price": 8000, "luz": "Cálida", "control": "dimmer", "stock": 4, "img": "../src/components/assets/corner.jpeg"},
    {"id": 3, "name": "Corner", "price": 8000, "luz": "RGB", "control": "wifi", "stock": 6, "img": "../src/components/assets/corner.jpeg"},
    {"id": 4, "name": "Cleo", "price": 8000, "luz": "Fria", "control": "dimmer", "stock": 4, "img": "../src/components/assets/corner.jpeg"},
    {"id": 5, "name": "Triangulo", "price": 8000, "luz": "Cálida", "control": "dimmer", "stock": 7, "img": "../src/components/assets/corner.jpeg"}
]
  useEffect(() => {
    
        const getProducts = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Products)
            }, 2000);
        })
   getProducts.then((result) => {
      setProducts(result) 
   })
}, [])
   
    return( 
        <div > 
            <h1 style = {styles}>
                {marca}
            </h1>
            <h3>Diseños novedosos de lámparas led e iluminarias💡</h3>
            <h4>lista de productos</h4>
            <div className = 'products'>
                <ItemList products = {products}/>
                <ItemDetailContainer itemsDetail = {Products}/>
            </div>
        </div>
    )
}

export default ItemListContainer