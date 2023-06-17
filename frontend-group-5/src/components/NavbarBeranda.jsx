import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBoxArrowInRight} from 'react-icons/bs';
import { BsListUl} from 'react-icons/bs';
import { BiBell} from 'react-icons/bi';
import { BsPerson} from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../img/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../redux/actions/auth";

export const NavbarBeranda = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);
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
          {isLoggedIn?(
            <div className='navbar-login-right'>
              <Link to="/"><BsListUl style={{marginRight:20,fontSize:20, color:"black"}}/></Link>
              <Link to="/notifikasi"><BiBell style={{marginRight:20,fontSize:20,color:"black"}}/></Link>
              <Link to="/akun"><BsPerson style={{marginRight:20,fontSize:20,color:"black"}}/></Link>
            </div>
          ):(
            <Link to="/login">
              <Button className='bt-masuk me-5'>
            <BsBoxArrowInRight className='me-2'/>
            Masuk
          </Button>
            </Link> 
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
