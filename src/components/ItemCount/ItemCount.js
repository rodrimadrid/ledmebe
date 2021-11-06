import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './ItemCount.css';
const ItemCount = ({ handleMas, handleMenos, handleOnAdd, stock, count}) => {

    return (
        <>
            <div>
                <span>Stock: <strong>{stock}</strong></span>
                <button className = 'btn btn-danger m-2'onClick = {handleMenos}>-</button>
                 {count}
                <button className = 'btn btn-success m-2' onClick = {handleMas}>+</button>
            </div>
            <div>
                <button 
                    className = 'btn btn-primary'
                    onClick = {handleOnAdd}>
                    Agregar al carrito
                </button>
                <CartWidget />
            </div>
        </>
    )
} 
export default ItemCount