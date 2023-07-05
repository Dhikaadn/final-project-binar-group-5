import React, { useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { BsBoxArrowRight } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../redux/actions/auth";
import { update } from "../redux/actions/updateuser";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export const Akun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uuidUser } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);

  // ==== SHOW HIDE PASS
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // ==== SHOW HIDE PASS

  const onUpdate = (e) => {
    e.preventDefault();
    const data = { uuidUser, name, phoneNumber, password };
    dispatch(update(data, navigate));
  };

  // ==== VALIDATION FORM
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // ==== VALIDATION FORM

  return (
    <>
      <NavbarBeranda />
      <Container className="">
        <Row className="mb-4 btn-back border-bottom pb-4">
          <div className="title_pesanan mb-3">
            <p className="fw-bold mt-5 fs-4">Akun</p>
          </div>
          <Col className="d-flex justify-content-between align-items-center">
            <div className="textBtn_back2 w-100">
              <Button
                style={{ background: "none", border: "none" }}
                as={Link}
                to="/"
              >
                <BiArrowBack className="fs-5" />
              </Button>{" "}
              Beranda
            </div>
          </Col>
        </Row>

        <Row className=" justify-content-center">
          <Col>
            <Card className=" border-0">
              <Card.Body>
                <div className="bt-menu-akun">
                  <AiOutlineEdit className="me-2 iconAkun" />
                  Ubah Profil
                </div>
                <div className="bt-menu-akun">
                  <CiSettings className="me-2 iconAkun" />
                  Pengaturan Akun
                </div>
                <div
                  className="bt-menu-akun"
                  onClick={() => dispatch(logout(navigate))}
                >
                  <BsBoxArrowRight className="me-2 iconAkun" />
                  Keluar
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="pb-3 fw-bold">
                  Ubah Data Profil
                </Card.Title>
                <Card.Text className="title_card2 d-flex justify-content-start align-items-center rounded-top-4 ps-4">
                  Data Diri
                </Card.Text>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput0"
                  >
                    <Form.Label className="text_label">Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Fullname"
                      id="fullName"
                      name="fullName"
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="off"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text_label">
                      Nomor Telepon
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="+62"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      autoComplete="off"
                      required
                    />
                  </Form.Group>

                  <Form.Label className="text_label">Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      controlId="exampleForm.ControlInput2"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Masukkan Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="off"
                    />
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{ cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                    </InputGroup.Text>
                  </InputGroup>

                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      onClick={(e) => onUpdate(e)}
                      type="submit"
                      id="submit"
                      style={{ background: "#4B1979", border: "none" }}
                      className="px-5"
                    >
                      Simpan
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
