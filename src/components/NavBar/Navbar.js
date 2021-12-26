import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.js'
import Logo from '../assets/Logo.jpg'
import './navbar.css'
function NavBar() {
  return (
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand>
            <NavLink className = 'link' to='/'><img className = 'logo' src={Logo} alt='logo'/></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} className='link' to='/'>
                Inicio
              </Nav.Link>                          
              <Nav.Link as={NavLink} className='link' to='/productos'>
                 Productos
              </Nav.Link>                                
              <NavDropdown title="Categorias" id="basic-nav-dropdown" className='link'>
              <NavDropdown.Item>
               <NavLink className='link-sub' to='/category/RGB'>RGB</NavLink>
              </NavDropdown.Item>     
              <NavDropdown.Item>
               <NavLink className='link-sub' to='/category/Cálida'>Cálidas</NavLink>
              </NavDropdown.Item>     
                <NavDropdown.Divider />
                <NavDropdown.Item>
               <NavLink className='link-sub' to='/cart'>Cart</NavLink>
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
