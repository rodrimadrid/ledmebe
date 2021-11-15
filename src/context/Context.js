import React, { createContext, useState } from "react";
export const CartCntxt = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  let [quantyItems, setQuantyItems] = useState(0);
//Funcion para agregar productos
  const addToCart = (item, count) => {
//creo newItem para encontrar coincidencias dentro de cart
    let newItem = cart.find((product) => product.id === item.id);
//si no las encuentro seteo el carrito con el nuevo item
    if (!newItem) {
      setCart([...cart, { ...item, quantity: count }]);
      setQuantyItems(quantyItems + count);
    } else {
      // si encuentra el item, actualiza la cantidad
      cart.map((item) =>
        item.id === newItem.id ? { ...(item.quantity += count) } : item
      );
      setQuantyItems(quantyItems + count);
    }
  };
  //eliminar item del carrito
  const deleteItem = (item) => {
    console.log(item.quantity);
    setQuantyItems(quantyItems - item.quantity);
    let newCart = cart.filter((e) => e.id !== item.id);
    setCart(newCart);
  };
  //calculo el precio total
  const totalPrice = () => {
    let total = 0;
    if (cart.length !== 0) {
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    } else {
      return total;
    }
  };
  return (
    <CartCntxt.Provider
      value={{ cart, setCart, addToCart, deleteItem, quantyItems, totalPrice, setQuantyItems }}
    >
      {children}
    </CartCntxt.Provider>
  );
};
export default CartContext;
