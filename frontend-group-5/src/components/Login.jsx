import React from "react";
import imgLeft from "../img/img-left.jpg";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Login = () => {
  // ==== VALIDATION FORM
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    const data = { email, password };
    dispatch(login(data, navigate));

    setValidated(true);
  };
  // ==== VALIDATION FORM

  // ==== SHOW HIDE PASS
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // ==== SHOW HIDE PASS

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasswordInput] = useState("");

  // const [passwordType, setPasswordType] = useState("password");
  // const handlePasswordChange = (evnt) => {
  //     setPasswordInput(evnt.target.value);
  // }
  // const togglePassword = () => {
  //     if (passwordType === "password") {
  //         setPasswordType("text")
  //         return;
  //     }
  //     setPasswordType("password")
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const data = { email, password };
  //   dispatch(login(data, navigate));
  // };

  console.log(password);
  console.log(email);
  return (
    <>
          <Row className="LoginRegis align-items-center">
            <Col>
            <img src={imgLeft} alt="img-left" className="imgLogin"/>
            </Col>
            <Col>
              {/* onSubmit={onSubmit} */}
              <Container className="formLogin">
              <h3 className="fw-bold">Masuk</h3>
              <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email/No Telepon</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Contoh:johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    controlId="exampleForm.ControlInput2"
                    type={showPassword ? "text" : "password"}
                    name="email"
                    placeholder="Masukkan Password"
                    value={password}
                    onChange={handlePasswordChange}
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

                <Button
                  type="submit"
                  id="submit"
                  style={{ background: "#7126B5", border: "none" }}
                  className="w-100"
                >
                  Masuk
                </Button>
                <div className="mt-3 d-flex justify-content-center ">
                  <p>
                    Belum punya akun?
                    <NavLink to="/register" className="linkLogin">
                      Daftar di sini
                    </NavLink>
                  </p>
                </div>
              </Form>
              </Container>
            </Col>
          </Row>
    </>
  );
};
