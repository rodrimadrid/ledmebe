import React, { useState, useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { firestore, getFirestore } from '../firebase'
import { CartCntxt } from '../context/Context.js'
import BuyerForm from './BuyerForm'



const Compra = () => {
    
    const { cart, price } = useContext(CartCntxt);
    const [ compraID, setCompraID] = useState()
    const [buyerInfo, setBuyerInfo] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        localidad: '',
        telefono: ''
    })

    const db = getFirestore();
    const compra = db.collection("compra");


    const newCompra = {
        buyer: buyerInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: price()
    }

    const handleChange = (e)=>{
        setBuyerInfo({
                ...buyerInfo,
                [e.target.name] : e.target.value
            })
        }
    const handleBuy = (e)=>{
        e.preventDefault()
        //actualizo coleccion "compra"
        compra.add(newCompra).then(({ id }) => {
            setCompraID(id)
        }).catch((error) => {
        console.log("Error al realizar compra", error);
      })
      
    }
    return (
        <div>
            <BuyerForm 
                handleChange={handleChange}
                handleBuy={handleBuy}
            />
        </div>
    )
}

export default Compra

