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
import Logo from "./../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "./../../redux/actions/auth";
import { Col, Row } from "react-bootstrap";
import Countdown from "./../../controller/Countdown"

export const NavbarCheckout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, token, user } = useSelector((state) => state.auth);
    return (
        <>
            <div className="fixed-top position-sticky">
                <Navbar
                    expand="lg"
                    className="bg-body-tertiary position-sticky fixed-top navbar-beranda"
                >
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
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
                                        <Link to="/riwayat">
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
                                            <Button
                                                className=" me-5 py-2"
                                                style={{ background: "#7126B5", border: "none" }}
                                            >
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
                <div className="bg-light py-2">
                    <Container className="mt-3">
                        <Row >
                            <Col className='d-flex'>
                                <p className='fw-bold pe-2'>Isi Data Diri</p>
                                <p className='text-bio fw-bold pe-2'> {'>'} </p>
                                <p className='pe-2'>Bayar</p>
                                <p className='text-bio fw-bold pe-2'> {'>'} </p>
                                <p className='pe-2'>Selesai</p>
                            </Col>
                            <Countdown />
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export const NavbarCheckout2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, token, user } = useSelector((state) => state.auth);
    return (
        <>
            <div className=" position-sticky fixed-top">
                <Navbar
                    expand="lg"
                    className="bg-body-tertiary position-sticky fixed-top navbar-beranda"
                >
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
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
                                        <Link to="/riwayat">
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
                                            <Button
                                                className=" me-5 py-2"
                                                style={{ background: "#7126B5", border: "none" }}
                                            >
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

                <div className="bg-light py-2">
                    <Container className="mt-3">
                        <Row >
                            <Col className='d-flex'>
                                <p className='fw-bold pe-2'>Isi Data Diri</p>
                                <p className='text-bio fw-bold pe-2'> {'>'} </p>
                                <p className='pe-2'>Bayar</p>
                                <p className='text-bio fw-bold pe-2'> {'>'} </p>
                                <p className='pe-2'>Selesai</p>
                            </Col>
                            
                        <p className='alertNotif_success d-flex justify-content-center align-items-center'>Data Anda berhasil tersimpan!</p>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export const NavbarCheckout3 = () => {

    const getFutureDate = () => {
        const today = new Date(); // Mendapatkan tanggal hari ini
        const futureDate = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000); // Menambahkan 5 hari ke tanggal hari ini
    
        const options = { day: "numeric", month: "long", year: "numeric" };
        const todayString = today.toLocaleDateString("id-ID", options);
        const futureDateString = futureDate.toLocaleDateString("id-ID", options);
    
        return {
          today: todayString,
          future: futureDateString,
        };
      };
      
      // Menggunakan fungsi untuk mendapatkan tanggal dan menampilkannya di komponen JSX
  const dates = getFutureDate();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, token, user } = useSelector((state) => state.auth);
    return (
        <>
            <div className=" position-sticky fixed-top">
                <Navbar
                    expand="lg"
                    className="bg-body-tertiary position-sticky fixed-top navbar-beranda"
                >
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
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
                                        <Link to="/riwayat">
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
                                            <Button
                                                className=" me-5 py-2"
                                                style={{ background: "#7126B5", border: "none" }}
                                            >
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

                <div className="bg-light py-2">
                    <Container className="mt-3">
                        <Row >
                            <Col className='d-flex'>
                                <p className='fw-bold pe-2'>Isi Data Diri</p>
                                <p className='text-bio fw-bold pe-2'> {'>'} </p>
                                <p className='pe-2 fw-bold'>Bayar</p>
                                <p className='text-bio fw-bold pe-2'> {'>'} </p>
                                <p className='pe-2'>Selesai</p>
                            </Col>

                            <p className="alertNotif_danger d-flex justify-content-center align-items-center">
              Selesaikan Pembayaran Anda Sebelum Tanggal {dates.future}
            </p>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};


