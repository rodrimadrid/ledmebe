import React, { createContext, useState } from 'react';
export const CartCntxt = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  let [quantyItems, setQuantyItems] = useState(0);


  const addToCart = (item, count) => {
    let newItem = cart.find((product) => product.name === item.name);
    if (!newItem) {
      setCart([...cart, { ...item, quantity: count }]);
      setQuantyItems(quantyItems + count);
    } else {
      cart.map((item) =>
        item.name === newItem.name ? { ...(item.quantity += count) } : item
      );
      setQuantyItems(quantyItems + count);    
    }
  };
  const deleteItem = (item) => {
      console.log(item.quantity)
    setQuantyItems(quantyItems - item.quantity);
    let newCart = cart.filter((e) => e.name !== item.name);
    setCart(newCart);    
  };
  const price = ()=>{
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
               price }}
    >
      {children}
    </CartCntxt.Provider>
  );
};
export default CartContext;
