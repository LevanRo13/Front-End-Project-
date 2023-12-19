  import React from 'react';
  import Navbar from 'react-bootstrap/Navbar';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Form from 'react-bootstrap/Form';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import { FaSearch, FaUserCircle } from 'react-icons/fa';
  import { useNavigate } from 'react-router-dom';
  import Logo from '../Logo/Logo';
  import './Header.css';
  import { Col, Row } from 'react-bootstrap';

  function Header() {
    const navigate = useNavigate();

    return (
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className='container-nav'>
          <Navbar.Brand onClick={() => navigate('/')}><Logo /></Navbar.Brand>

          <Nav className="custom-nav">

            <Container className='custom-containernavlink'>
              <Nav.Link className="custom-navlink" onClick={() => navigate('/categorias')}>Categorias</Nav.Link>
              <Nav.Link className="custom-navlink" href="#productos">Productos</Nav.Link>
              <Nav.Link className="custom-navlink" href="#conocenos">Conócenos</Nav.Link>
            </Container>
            
          

          <Form className="custom-form">
              <Row className="align-items-center">
                <Col xs={8}>
                  <Form.Control
                    type="search"
                    placeholder="¿Qué estás buscando?"
                    className="custom-input"
                    aria-label="Search"
                  />
                </Col>
                  <Col xs={2} className="text-end">
                  <FaSearch className="search-icon" />
                </Col>
              </Row>
            </Form>
            </Nav>
          <NavDropdown
            title={<FaUserCircle className="bi bi-person-circle iconUser" />}
            id="navbarUser"
            className='customNavbarUser'>
            <NavDropdown.Item href="#ingresar">Ingresá</NavDropdown.Item>
            <NavDropdown.Item href="#registrate">Regístrate</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#cuenta">Ingresa a tu cuenta</NavDropdown.Item>
          </NavDropdown>
            
          
        </Container>
      </Navbar>
    );
  }

  export default Header;
