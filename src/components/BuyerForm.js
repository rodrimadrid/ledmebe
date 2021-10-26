import React, { useState } from 'react';
import {Form, Row, Button, Col } from 'react-bootstrap';


const BuyerForm = ({handleChange, handleBuy}) => {
    

    return (
        <div>
           <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" 
                              placeholder="Nombre"
                              onChange={handleChange}
                              name='nombre'/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" 
                              placeholder="Apellido" 
                              name="apellido"
                              onChange={handleChange} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                              placeholder="Ingresar email"
                              name="email"
                              onChange={handleChange} />
                </Form.Group>
            

            <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Direccion</Form.Label>
                <Form.Control placeholder="Nazca 2354"
                              name= 'direccion'
                              onChange={handleChange} />
            </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Localidad</Form.Label>
                <Form.Control name='localidad'
                              onChange={handleChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="number" 
                              placeholder="Telefono" 
                              name='telefono'
                              onChange={handleChange}/>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit" onClick={handleBuy}>
                Realizar Compra
            </Button>
            </Form>
        </div>
    )
}

export default BuyerForm
