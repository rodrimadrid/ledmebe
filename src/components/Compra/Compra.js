import React, { useState, useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { getFirestore } from '../../firebase'
import { CartCntxt } from '../../context/Context.js'
import { createOrder, scrollear } from "../../firebase/functions.js"
import BuyerForm from '../BuyerForm/BuyerForm'
import Alert from 'react-bootstrap/Alert'
import './Compra.css'
 
const Compra = () => {
    
    const { cart, totalPrice } = useContext(CartCntxt);
    const [ alert, setAlert ] = useState()
    const [ message, setMessage ] = useState('')
    const [ compraID, setCompraID ] = useState()
    const [ buyerInfo, setBuyerInfo ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        localidad: '',
        telefono: ''
    })
    const order = []
    for (const item of cart) {
        let {control, img, luz, stock, ...res} = item
        const itemToBuy = res
        order.push(itemToBuy)
    }

    const db = getFirestore();
    const compra = db.collection("compra");

    const newCompra = {
        buyer: buyerInfo,
        items: order,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalPrice()
    }

    const handleSetAlert = (boolean, message)=>{
        setAlert(boolean)
        setMessage(message)
    }
    const handleChange = (e)=>{
        setBuyerInfo({
                ...buyerInfo,
                [e.target.name] : e.target.value
            })
        }
    const handleBuy = ()=>{
        //creo documento "compra"
        createOrder(compra, newCompra, setCompraID) 
        //actualizo el stock del documento

    }
    useEffect(() => {
        if (!alert && compraID) {
           scrollear('.alert-compraID')
        }
        else if (alert) {
            scrollear('.alert-danger')
            setTimeout(() => {setAlert(false)}, 3000);
            }
    }, [compraID, alert])
   
    return (
        <div>
            <BuyerForm 
                handleChange={handleChange}
                handleBuy={handleBuy}
                handleSetAlert={handleSetAlert}
            />
            {(!alert && compraID) && (
                  <Alert key={compraID} variant='info' className= 'alert-compraID'>
                    La identificacion de su compra es {compraID}
                  </Alert>
            )}
            {alert && (
                  <Alert key = '2' variant='danger' className= 'alert-danger m-3'>
                    {message}
                  </Alert>
            )}
        </div>
    )
}

export default Compra

