import React, { useState } from 'react'
import './ItemCount.css';
const ItemCount = ({stock, initial}) => {
    let [cantidad, setCantidad] = useState(Number(stock))
    let [count, setCount] = useState(Number(initial))
  
    let onAdd = () => { 
        if (cantidad > 0) {
            setCantidad(cantidad - count)
            setCount(1)
        } else {
            console.log('Sin stock')
            setCount(0)
        }
    }
    let mas = ()=>{
        cantidad > count ? setCount(count +1) : console.log('Sin stock')
    }
    let menos = ()=>{
        count > 1 ? setCount(count -1) :  console.log('nada')
    }
    console.log(cantidad)
    return (
        <>
            <div><button className = 'btn btn-danger m-2'onClick = {menos}>-</button>{count}<button className = 'btn btn-success m-2' onClick = {mas}>+</button></div>
            <button className = 'btn btn-primary' onClick = {onAdd}>Agregar al carrito</button>

        </>
    )


} 
export default ItemCount