import React, { useState } from 'react'
import ItemList from './ItemList.js'
const ItemListContainer = (props) =>{
    let [marca, setMarca] = useState(props.marca)
    let styles = {
        color : '#7D2181',
        fontSize : '2em'
    }
    return( 
        <div > 
            <h1 style = {styles}>
                {marca}
            </h1>
            <h3>Diseños novedosos de lámparas led e iluminarias💡</h3>
            < ItemList />
        </div>
    )
}

export default ItemListContainer