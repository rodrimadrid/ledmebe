import React, { useState, useContext } from "react";
import { CartCntxt } from "../../context/Context.js";
import { Form, Row, Button, Col } from "react-bootstrap";

const BuyerForm = ({ handleChange, handleBuy, handleSetAlert, handleCheckEmail }) => {
  
  const [validated, setValidated] = useState(false);
  const { cart } = useContext(CartCntxt);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    // se verifica si los campos estan llenos
    if (form.checkValidity() === false) {
      event.stopPropagation();
      handleSetAlert(true, "Completa todos los campos");
    }
    
    else if (form.checkValidity() === true ) {
      // verificar coincidencia de email
      if (!handleCheckEmail()) {
        handleSetAlert(true, "Los email no coinciden");
      }
      //verifico si se agregaron productos
      else if (!cart.length) {
        handleSetAlert(true, "No agregaste productos");
      } 
      else {
        handleBuy();
        handleSetAlert(false, "");
      }
    }
    setValidated(true);
  };
  return (
    <div className='m-3'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              name="nombre"
            />
          </Form.Group>
          <Form.Group as={Col} md controlId="formGridApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              name="apellido"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Ingresar email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md controlId="formGridEmail2">
            <Form.Label>Repetir email</Form.Label>
            <Form.Control
              required = {!handleCheckEmail()}
              isInvalid = {!handleCheckEmail()}
              type="email2"
              placeholder="Repetir email"
              name="email2"
              onChange={handleChange}
            />
        <Form.Control.Feedback type="invalid">
            Los email deben coincidir.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md  controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              required
              placeholder="Nazca 2354"
              name="direccion"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md controlId="formGridCity">
            <Form.Label>Localidad</Form.Label>
            <Form.Control required name="localidad" onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} md controlId="formGridPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Telefono"
              name="telefono"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Button type="submit" id="sendOrder">
          Enviar Orden
        </Button>
      </Form>
    </div>
  );
};

export default BuyerForm;
