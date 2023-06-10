import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBoxArrowInRight} from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../img/logo.jpg';

export const NavbarBeranda = () => {
  return (
    <Navbar bg="white" expand="lg" className='navbar-beranda'>
      <Container fluid>
        <Navbar.Brand href="#home" className='ms-5 me-4'>
            <img
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Form.Group md="4" controlId="validationFormikUsername">
              <InputGroup hasValidation className='container-input-beranda'>
                <Form.Control
                  type="text"
                  placeholder="Cari di sini ..."
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  className='input-search-beranda'
                />
                <InputGroup.Text id="inputGroupPrepend" className='icon-search'><AiOutlineSearch/></InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Nav>
          <Button className='bt-masuk me-5'>
            <BsBoxArrowInRight className='me-2'/>
            Masuk
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
