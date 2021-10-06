import React, {useState} from "react";
import ItemCount from './ItemCount.js';
import { Button, Modal } from "react-bootstrap";
const ItemDetail = ({name, price, img, luz, control, stock})=>{
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(luz + control + name)
    return (
        <>
            <Button className= 'my-4' variant="primary" onClick={handleShow}>
                Detalle
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>luz: {luz}</span>
                    <span>control: {control}</span>
                    <span>precio: {price}</span>
                </Modal.Body>
                <Modal.Footer>
                 <ItemCount stock = {stock} initial = '1'/>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ItemDetail