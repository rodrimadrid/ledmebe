import React, { useState } from 'react'
import ItemCount from './ItemCount.js'
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
            <ItemCount stock = '12' initial = '1'/>
        </div>
    )
}

export default ItemListContainer