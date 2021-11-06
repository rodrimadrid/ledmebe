import React, { createContext, useState } from 'react';
export const CartCntxt = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  let [quantyItems, setQuantyItems] = useState(0);


  const addToCart = (item, count) => {
    let newItem = cart.find((product) => product.id === item.id);
    if (!newItem) {
      setCart([...cart, { ...item, quantity: count }]);
      setQuantyItems(quantyItems + count);
    } else {
      cart.map((item) =>
        item.id === newItem.id ? { ...(item.quantity += count) } : item
      );
      setQuantyItems(quantyItems + count);    
    }
  };
  const deleteItem = (item) => {
      console.log(item.quantity)
    setQuantyItems(quantyItems - item.quantity);
    let newCart = cart.filter((e) => e.id !== item.id);
    setCart(newCart);    
  };
  const totalPrice = ()=>{
    let total = 0
    if (cart.length !== 0) {
      cart.forEach(item => {
      total += (item.price * item.quantity)
    });
    return total
    }else{
      return total
    }
   
    
  }
  return (
    <CartCntxt.Provider
      value={{ cart, 
               setCart, 
               addToCart, 
               deleteItem, 
               quantyItems,
               totalPrice }}
    >
      {children}
    </CartCntxt.Provider>
  );
};
export default CartContext;
