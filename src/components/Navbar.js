import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.js'
import Logo from './assets/Logo.jpg'
function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to='/'><img className = 'logo' src={Logo}/></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
               <NavLink to='/'>Inicio</NavLink>
              </Nav.Link>                          
              <Nav.Link>
               <NavLink to='/galery'>Galeria</NavLink>
              </Nav.Link>                                
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
               <NavLink to='/category/RGB'>RGB</NavLink>
              </NavDropdown.Item>     
              <NavDropdown.Item>
               <NavLink to='/category/Cálida'>Cálidas</NavLink>
              </NavDropdown.Item>     
                <NavDropdown.Divider />
                <NavDropdown.Item>
               <NavLink to='/cart'>Cart</NavLink>
              </NavDropdown.Item>     
              </NavDropdown>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default NavBar;
