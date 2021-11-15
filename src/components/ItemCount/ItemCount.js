import React from 'react'
import { Button } from 'react-bootstrap'
import './ItemCount.css';
const ItemCount = ({ handleMas, handleMenos, handleOnAdd, stock, count}) => {

    return (
        <>
            <div>
                <span>Stock: <strong>{stock}</strong></span>
                <Button  variant="outline-secondary m-2"onClick = {handleMenos}>-</Button>
                 {count}
                <Button  variant="outline-secondary m-2" onClick = {handleMas}>+</Button>
            </div>
            <div>
                <Button 
                    variant="outline-warning m-3"
                    onClick = {handleOnAdd}>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
} 
export default ItemCount