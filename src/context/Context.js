import { createContext, useState } from "react";
export const CartCntxt = createContext();

 const CartContext = ({children}) => {
     const [cart, setCart ]= useState([]) 

const addToCart = (item, cantidad)=>{
  console.log(item)
  console.log(cantidad)
  let newItem = cart.find(product => product.id === item.id)

  if(!newItem) {
  Object.defineProperty(item, 'quantity', {value: cantidad})
  setCart([...cart, item])
  }else{
    cart.map(item => item.id === newItem.id 
      ? {...item.quantity += cantidad }
      :
      item
      ) 
  }
}
    return (
        <CartCntxt.Provider value={{cart, setCart, addToCart}}>
           {children} 
        </CartCntxt.Provider>
    )
}
export default CartContext