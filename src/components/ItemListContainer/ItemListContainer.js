import React, { useState, useEffect } from 'react'
import { getFirestore } from '../../firebase'
import ItemList from '../ItemList/ItemList.js'
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ products }) =>{
 
    let [items, setItems] = useState(products)
    const { id: idCategory } = useParams();
    let styles = {
        color : '#7D2181',
        fontSize : '2em'
    }
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
useEffect(() => {

    if (idCategory) {
      const itemsList = itemCollection.where("luz", "==", idCategory)
      itemsList.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log("No Hay resultados");
        }
        setItems(querySnapshot.docs.map(doc => {
          return{id: doc.id, ...doc.data()} 
          }));
      }).catch((error) => {
        console.log("Error al traer los items", error);
      })
    }else{

       itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log("No Hay resultados");
        }
        setItems(querySnapshot.docs.map(doc => {
          return{id: doc.id, ...doc.data()} 
          }));        
      }).catch((error) => {
        console.log("Error al traer los items", error);
      }) 
    }
}, [idCategory])
   
    return( 
        <div > 
          <div className='header'>
            <h1 style = {styles}>
                Led Me BE
            </h1>
            <h3>Diseños novedosos de lámparas led e iluminarias💡</h3>
            <h4>lista de productos</h4>
          </div>  
            <div className = 'products'>
                <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer