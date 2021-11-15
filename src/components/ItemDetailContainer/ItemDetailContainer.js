import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { FiArrowLeft } from "react-icons/fi";
import { Spinner, Alert } from "react-bootstrap";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  let [detail, setDetail] = useState([]);
  const { id: idProduct } = useParams();

  useEffect(() => {
    //conexion con firebase
    const db = getFirestore();
    //selecciono coleccion
    const itemCollection = db.collection("Productos");
    //seleccino documento
    const itemDetail = itemCollection.doc(idProduct);
    //Peticion a firebase
    itemDetail
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("No Hay resultados");
        }
        setDetail({ ...data.data(), id: idProduct });
      })
      .catch((error) => {
        console.log("Error al traer los items", error);
      });
  }, [idProduct]);

  return (
    <div className="container">
      {detail.id && detail.stock !== 0 && <ItemDetail detail={detail} />}
      {!detail.stock && detail.stock !== 0 && (
        <Spinner className="spinner" animation="border" variant="secondary" />
      )}
      {detail.stock === 0 && (
        <div className="container-sinstock">
          <Alert key="2" variant="danger" className="alert-danger">
            Producto sin stock
          </Alert>
          <Link to={`/productos`} className="left-arrow">
            <FiArrowLeft size={50} color="#0dcaf2" />
          </Link>
        </div>
      )}
    </div>
  );
};
export default ItemDetailContainer;
