import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import './ItemListContainer.css';
import { getFirestore } from '../firebase'
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = () => {
  let [detail, setDetail] = useState([]);
  const { id: idProduct } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Productos");
    const itemsDetailList = itemCollection.where("id", "==", idProduct )
    itemsDetailList.get().then((querySnapshot) => {
    if(querySnapshot.size === 0) {
      console.log("No Hay resultados");
      console.log(itemsDetailList)
      }
      setDetail(querySnapshot.docs.map(doc => {
        return{id: doc.id, ...doc.data()} 
        }));
    }).catch((error) => {
      console.log("Error al traer los items", error);
    })
    console.log(detail)

    /* const getItem = new Promise((resolve, reject) => {
      const buscarProducto = Products.find(
        (element) => element.id === parseInt(idProduct)
      );
      setTimeout(() => {
        resolve(buscarProducto);
        console.log(buscarProducto);
      }, 2000);
    });
    getItem.then((result) => {
      setDetail(result);
    }); */
  }, [idProduct]);

  return (
    <div >
      {detail.stock && <ItemDetail detail={detail} />}
      {detail.stock === undefined && (
        <Spinner
          className="spinner"
          animation="border"
          variant="secondary"
       
        />
      )}
    </div>
  );
};
export default ItemDetailContainer;
