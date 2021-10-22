import React, { createContext, useState } from 'react';
export const CartCntxt = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  let [quantyItems, setQuantyItems] = useState(0);
  const addToCart = (item, cantidad) => {
    let newItem = cart.find((product) => product.id === item.id);
    if (!newItem) {
      setCart([...cart, { ...item, quantity: cantidad }]);

      setQuantyItems(quantyItems + cantidad);
    } else {
      cart.map((item) =>
        item.id === newItem.id ? { ...(item.quantity += cantidad) } : item
      );
      setQuantyItems(quantyItems + cantidad);
    }
  };
  const deleteItem = (item) => {
    let newCart = cart.filter((e) => e.id !== item.id);
    setCart(newCart);
    setQuantyItems(quantyItems - item.quantity);
  };
  return (
    <CartCntxt.Provider
      value={{ cart, setCart, addToCart, deleteItem, quantyItems }}
    >
      {children}
    </CartCntxt.Provider>
  );
};
export default CartContext;
