import React from 'react'
import App from '../../App'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary m-0" data-bs-theme="dark">
          <Container fluid>
            <NavLink to={'/'}><img src="/assets/img/Logo/BananaPixel.png" alt="logo de banana pixel" className='logoBanana mx-3'/></NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Banana Pixel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start align-items-center flex-grow-1 pe-3">
                  <NavLink to={'/presentacion'} className='estilo px-3'>Quienes Somos</NavLink>
                  <NavLink to={'/promos'} className='estilo px-3'>Promociones</NavLink>
                  <NavLink to={'categoria/Frutas'} className='estilo px-3'>Frutas</NavLink>
                  <NavLink to={'categoria/Verduras'} className='estilo px-3'>Verduras</NavLink>
                </Nav>
                <Form className="d-flex align-items-center">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className='me-5 me-sm-0'>Buscar</Button>
                </Form>
                <CartWidget/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
    </>
  );
}

export default NavBar;