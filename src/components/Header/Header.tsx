import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';import './Header.css'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Header(){
  const navigate= useNavigate();
  //ver isLoggedIn y token
  return (
    <Navbar expand="lg">
      <Container fluid>
      
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <Nav.Link href="#action1" className='me-5'>Logo</Nav.Link>
            <Nav.Link onClick={()=> navigate('/categorias')} className='me-2'>Categorias</Nav.Link>
            <Nav.Link href="#action3" className='me-2'>Productos</Nav.Link>
            <Nav.Link href="#action3" className='me-2'>Conocenos</Nav.Link>
            
          
          <Form className="custom-form">
            <Row className="align-items-center">
              <Col xs={8}>
                <Form.Control
                  type="search"
                  placeholder="¿Qué estás buscando?"
                  className="form-control-sm"
                  aria-label="Search"
                />
              </Col>
                <Col xs={2} className="text-end">
                <FaSearch className="search-icon" />
              </Col>
            </Row>
          </Form>

          <NavDropdown
            title={
              <Row className="align-items-center customNavbarUser">
                <Col xs={2}>
                  <FaUserCircle className="bi bi-person-circle iconUser" />
                  <span>{'\u00A0'}{'\u00A0'}{'\u00A0'}Username</span>
                </Col>
              </Row>
            }
            id="navbarUser"
            className='me-5 customNavbarUser'
          >
            <NavDropdown.Item href="#action3">Ingresá</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Registrate</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Ingresá a tu cuenta</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
