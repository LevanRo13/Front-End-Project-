    import React, { useState } from 'react';
    import Navbar from 'react-bootstrap/Navbar';
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Form from 'react-bootstrap/Form';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import { FaCartPlus, FaHeart, FaMapMarker, FaSearch, FaStore, FaUserCircle } from 'react-icons/fa';
    import { useNavigate } from 'react-router-dom';
    import Logo from '../Logo/Logo';
    import './Header.css';
    import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap/lib/InputGroup';

    function Header() {
      const [expanded, setExpanded] = useState(false);
      const navigate = useNavigate();
    
      const handleToggle = () => {
        setExpanded(!expanded);
      };
    
      return (
        <Navbar expand="lg" className="custom-navbar">
          <Container fluid className='container-nav'>
    
            {/* Custom Navbar.Toggle with Logo */}
            <Navbar.Toggle onClick={handleToggle} aria-controls="navbarScroll" className="custom-toggle">
             <Logo />
            </Navbar.Toggle>
    
            <Navbar.Collapse in={expanded}>

                {/* Navbar.Brand with Logo (conditionally rendered based on expanded state) */}
                <Navbar.Brand onClick={() => navigate('/')} className={`d-lg-block ${expanded ? 'd-none' : ''}`}>
              <Logo />
            </Navbar.Brand>
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

              <div className="ml-auto customNavbarUser">
                  <div className="icon-container">
                    <FaUserCircle className="bi bi-person-circle iconUser" />
                    <span className="icon-text">Usuario</span>
                  </div>
                  <div className="icon-container">
                    <FaHeart />
                    <span className="icon-text">Favoritos</span>
                  </div>
                  <div className="icon-container">
                    <FaCartPlus />
                    <span className="icon-text">Carrito</span>
                  </div>
                </div>

             
            
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    export default Header;
