import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import Logo from "../img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../redux/actions/auth";
import { NavDropdown } from "react-bootstrap";

export const NavbarBeranda = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary position-sticky fixed-top navbar-beranda">
      <Container fluid >
        <Navbar.Brand as={Link} to='/'>
          <img src={Logo} alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Form.Group controlId="validationFormikUsername">
                  <InputGroup hasValidation className="container-input-beranda">
                    <Form.Control
                      type="text"
                      placeholder="Cari di sini ..."
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      className="input-search-beranda"
                    />
                    <InputGroup.Text
                      id="inputGroupPrepend"
                      className="icon-search"
                    >
                      <AiOutlineSearch />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
          </Nav>
            <Nav>
            {isLoggedIn ? (
                <div className="navbarItems">
                  <Link to="/">
                    <BsListUl
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                  <Link to="/notifikasi">
                    <BiBell
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                  <Link to="/akun">
                    <BsPerson
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                </div>
              ) : (
                <div className="navbarItems">
                  <Link to="/login">
                    <Button className=" me-5 py-2" style={{background:"#7126B5", border:"none"}}>
                      <BsBoxArrowInRight className="me-2 fs-5" />
                      Masuk
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <div className="position-sticky fixed-top">
        <Navbar bg="white" className="navbar-beranda">
          <Container fluid>
            <Navbar.Brand className="ms-5 me-4">
              <img src={Logo} alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Form.Group md="4" controlId="validationFormikUsername">
                  <InputGroup hasValidation className="container-input-beranda">
                    <Form.Control
                      type="text"
                      placeholder="Cari di sini ..."
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      className="input-search-beranda"
                    />
                    <InputGroup.Text
                      id="inputGroupPrepend"
                      className="icon-search"
                    >
                      <AiOutlineSearch />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Nav>
              {isLoggedIn ? (
                <div className="navbar-login-right">
                  <Link to="/">
                    <BsListUl
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                  <Link to="/notifikasi">
                    <BiBell
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                  <Link to="/akun">
                    <BsPerson
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <Button className="me-5 py-2" style={{background:"#7126B5", border:"none"}}>
                    <BsBoxArrowInRight className="me-2" />
                    Masuk
                  </Button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> */}
    </>
  );
};
