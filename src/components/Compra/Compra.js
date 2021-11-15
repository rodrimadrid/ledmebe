import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import { getFirestore } from "../../firebase";
import { CartCntxt } from "../../context/Context.js";
import { createOrder, updateStock, scrollear } from "../../firebase/functions.js";
import BuyerForm from "../BuyerForm/BuyerForm";
import Alert from "react-bootstrap/Alert";
import "./Compra.css";

const Compra = () => {
  const { cart, setCart, totalPrice, setQuantyItems } = useContext(CartCntxt);
  const [alert, setAlert] = useState();
  const [message, setMessage] = useState("");
  const [compraID, setCompraID] = useState();
  const [buyerInfo, setBuyerInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    email2: "",
    direccion: "",
    localidad: "",
    telefono: "",
  });
  // array orden de compra
  const order = [];

  // array de items sin stock
  const outOfStock = [];

  // creo la orden con las propiedades que elijo de los items en el array cart
  for (const item of cart) {
    let { control, img, luz, stock, ...res } = item;
    const itemToBuy = res;
    order.push(itemToBuy);
  }
  //conexion con firebase, y respectibas colecciones
  const db = getFirestore();
  const batch = db.batch();
  const compra = db.collection("compra");
  const itemsToUpdate = db.collection("Productos");

  //Nuevo documento compra (se genera para subirse a firestore)
  const newCompra = {
    buyer: buyerInfo,
    items: order,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: totalPrice(),
  };
  //EVENTOS
  const handleSetAlert = (boolean, message) => {
    setAlert(boolean);
    setMessage(message);
  };

  const handleChange = (e) => {
    setBuyerInfo({
      ...buyerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckEmail = () => {
    if (buyerInfo.email !== buyerInfo.email2) {
      return false;
    } else {
      return true;
    }
  };

  const handleBuy = () => {
    //creo documento "compra"
    createOrder(compra, newCompra, setCompraID);
    //actualizo el stock del documento
    updateStock(itemsToUpdate, order, batch, outOfStock);
    //limpio el cart 
    setCart([]);
    setQuantyItems(0)
  };
  
  useEffect(() => {
    if (!alert && compraID) {
      scrollear(".alert-compraID");
    } else if (alert) {
      scrollear(".alert-danger");
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [compraID, alert]);

  return (
    <div>
      <BuyerForm
        handleChange={handleChange}
        handleBuy={handleBuy}
        handleSetAlert={handleSetAlert}
        handleCheckEmail={handleCheckEmail}
      />
      {!alert && compraID && (
        <Alert key={compraID} variant="info" className="alert-compraID">
          La identificacion de su compra es {compraID}
        </Alert>
      )}
      {alert && (
        <Alert key="2" variant="danger" className="alert-danger m-3">
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Compra;
