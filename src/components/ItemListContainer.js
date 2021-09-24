import React, { useState } from 'react'
const ItemListContainer = (props) =>{
    let [cantSeguidores, setMSeguidores] = useState(0)
    let styles = {
        color : '#7D2181',
        fontSize : '2em'
    }
const seguidores = <p>Seguidores : {cantSeguidores}</p>
const sumarSeguidores = ()=>{
    cantSeguidores < 10 ?
    setMSeguidores(cantSeguidores +1)
    : console.log('Ya no hay lugar..')
}
    return( 
        <div > 
            <h1 style = {styles}>
                {props.marca}
            </h1>
            <h3>Diseños novedosos de lámparas led e iluminarias💡</h3>
            {seguidores}
            <button onClick = {sumarSeguidores}>+</button>
        </div>
    )
}

export default ItemListContainer