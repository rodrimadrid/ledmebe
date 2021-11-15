import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { CartCntxt } from "../../context/Context.js";
import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemDetail.css";
const ItemDetail = ({ detail }) => {
  let [stock, setStock] = useState();
  let [count, setCount] = useState(1);
  let { cart, addToCart } = useContext(CartCntxt);

  //Reorganizo el stock cuando se agregan productos al carrito
  useEffect(() => {
    if (!stock && !cart.length) {
      setStock(detail.stock);
    } else if (cart.length) {
      let detailStock = cart.find((item) => item.id === detail.id);
      detailStock
        ? setStock(detailStock.stock - detailStock.quantity)
        : setStock(detail.stock);
    }
  }, [stock]);

  //EVENTOS
  const handleOnAdd = () => {
    setStock(stock - count);
    addToCart(detail, count);
    setCount(1);
  };
  let handleMas = () => {
    stock > count ? setCount(count + 1) : console.log("Sin stock");
  };
  let handleMenos = () => {
    count > 1 ? setCount(count - 1) : console.log("...");
  };
  return (
    <div>
      {detail.stock && (
        <div className="itemDetail-container">
          <aside>
            <img src={detail?.img} className="detail-img" alt={detail?.name} />
          </aside>
          <div>
            <div className="itemDetail-title">
              <h2 className="m-2">
                {" "}
                <Link to={`/productos`} className="left-arrow">
                  <FiArrowLeft color="#0dcaf2" />
                </Link>
                {detail?.name}{" "}
              </h2>
            </div>
            <hr className="detail-line" />

            <p className="m-5">
              {" "}
              Lámpara led manejada con control {detail?.control} y una luz de
              tipo {detail?.luz}{" "}
            </p>
            {stock !== 0 && (
              <ItemCount
                handleOnAdd={handleOnAdd}
                handleMas={handleMas}
                handleMenos={handleMenos}
                stock={stock}
                count={count}
              />
            )}
            {cart.length !== 0 && (
              <NavLink className="itemDetail-link" to="/cart">
                <Button variant="outline-secondary" size="sm">
                  Ver Compra
                </Button>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;
