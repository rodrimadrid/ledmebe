import React, { useContext } from "react";
import { CartCntxt } from '../context/Context.js'

const Cart = ()=>{
   
    const {cart} = useContext(CartCntxt);


    return(
        <>
            <div>
                <h1>Carrito</h1>
                {cart.map( item=>{
                    return(
                        <div>{item.name}</div>
                    )
                })}
            </div>

        </>
    )
}
export default Cart