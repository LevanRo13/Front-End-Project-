import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { FaSearch } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
      <NavDropdown title={
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
        } id="navbarScrollingDropdown" className='me-5'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
        <Navbar.Brand href="#">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1" className='me-5'>Logo</Nav.Link>
            <Nav.Link href="#action2" className='me-2'>Categorias</Nav.Link>
            <Nav.Link href="#action3" className='me-2'>Productos</Nav.Link>
            <Nav.Link href="#action3" className='me-2'>Conocenos</Nav.Link>


          </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
