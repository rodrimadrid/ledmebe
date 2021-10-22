import React, { useState, useEffect } from 'react'
import { getFirestore } from '../firebase'
import ItemList from './ItemList.js'
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ products }) =>{
 
    let [items, setItems] = useState(products)
    const { id: idCategory } = useParams();
    let styles = {
        color : '#7D2181',
        fontSize : '2em'
    }
    console.log(idCategory + 'item')
useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
    if (idCategory) {
      const itemsList = itemCollection.where("luz", "==", idCategory)
      itemsList.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log("No Hay resultados");
        console.log(itemsList)
        }
        setItems(querySnapshot.docs.map(doc => {
          return{id: doc.id, ...doc.data()} 
          }));
      }).catch((error) => {
        console.log("Error al traer los items", error);
      })
    }else{
        console.log(items)
/*       itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log("No Hay resultados");
        }
        setItems(querySnapshot.docs.map(doc => {
          return{id: doc.id, ...doc.data()} 
          }));        
      }).catch((error) => {
        console.log("Error al traer los items", error);
      }) */
    }
       /*  const getitems = new Promise((resolve, reject)=>{
            let itemsList 
            if(idCategory){
                itemsList = items.filter(e => e.luz.toLowerCase() === idCategory)
            }else{
                itemsList = items
            }
            
            console.log(itemsList)
            setTimeout(() => {
                resolve(itemsList)
            }, 2000);
        })
   getitems.then((result) => {
      setItems(result) 
   }) */
   console.log(items)
}, [idCategory])
   
    return( 
        <div > 
            <h1 style = {styles}>
                Led Me BE
            </h1>
            <h3>Diseños novedosos de lámparas led e iluminarias💡</h3>
            <h4>lista de productos</h4>
            <div className = 'products'>
                <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer