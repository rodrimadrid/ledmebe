import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase'
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';


const ItemDetailContainer = () => {
  let [detail, setDetail] = useState([]);
  const { id: idProduct } = useParams();
  console.log(idProduct)
  useEffect(() => {
      const db = getFirestore();
     const itemCollection = db.collection("Productos");
    const itemDetail = itemCollection.doc(idProduct)
  itemDetail.get().then((data) => {
     if(data.size === 0) {
        console.log("No Hay resultados");
        }
        setDetail(data.data());
       
      }).catch((error) => {
        console.log("Error al traer los items", error);
      })

  }, [idProduct]);

  return (
    <div >
      {detail.stock && <ItemDetail detail={detail} />}
      {!detail.stock && (
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
