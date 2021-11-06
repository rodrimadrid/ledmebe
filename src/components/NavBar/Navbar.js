import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.js'
import Logo from '../assets/Logo.jpg'
import './navBar.css'
function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink className = 'link' to='/'><img className = 'logo' src={Logo}/></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
               <NavLink className='link' to='/'>Inicio</NavLink>
              </Nav.Link>                          
              <Nav.Link>
               <NavLink className='link' to='/galery'>Galeria</NavLink>
              </Nav.Link>                                
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
               <NavLink className='link' to='/category/RGB'>RGB</NavLink>
              </NavDropdown.Item>     
              <NavDropdown.Item>
               <NavLink className='link' to='/category/Cálida'>Cálidas</NavLink>
              </NavDropdown.Item>     
                <NavDropdown.Divider />
                <NavDropdown.Item>
               <NavLink className='link' to='/cart'>Cart</NavLink>
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
