import React, { useState } from 'react'
import './ItemCount.css';
const ItemCount = ({stock, initial}) => {
    let [cantidad, setCantidad] = useState(Number(stock))
    let [count, setCount] = useState(Number(initial))
  
    let onAdd = () => { 
        if (cantidad === count) {
            setCantidad(cantidad - count) 
            setCount(0)
        } else {
            setCantidad(cantidad - count) 
            setCount(1)
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
            <div>
                 <span>Stock: <bold>{cantidad}</bold></span>
                <button className = 'btn btn-danger m-2'onClick = {menos}>-</button>
                 <span>{count}</span>
                <button className = 'btn btn-success m-2' onClick = {mas}>+</button>
            </div>
            <button className = 'btn btn-primary' onClick = {onAdd}>Agregar al carrito</button>

        </>
    )


} 
export default ItemCount