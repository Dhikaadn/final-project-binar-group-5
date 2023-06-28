import React from "react";
import imgLeft from "../img/img-left.jpg";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { toast } from "react-toastify";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Register = () => {
  // ==== VALIDATION FORM
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    const data = { name, email, phoneNumber, password };
    dispatch(register(data, navigate));

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


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPasswordInput] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [passwordType, setPasswordType] = useState("password");
  // const handlePasswordChange = (evnt) => {
  //   setPasswordInput(evnt.target.value);
  // };
  // const togglePassword = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //     return;
  //   }
  //   setPasswordType("password");
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {name, email, phoneNumber, password};
  //   dispatch(register(data, navigate));
  // };

  return (
    <>
      <div className=" ">
        <img src={imgLeft} alt="img-left" className="position-fixed imgLogin" />
        <Container>
          <Row className="align-items-center" style={{ height: "100vh" }}>
            <Col>
              <div className="pembatas"></div>
            </Col>
            <Col>
              <h3 className="fw-bold">Daftar</h3>
              {/* onSubmit={onSubmit} */}
              <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="exampleForm.name">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.email">
                  <Form.Label>Email</Form.Label>
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

                <Form.Group className="mb-3" controlId="exampleForm.notelpon">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="phoneNumber"
                    name="phoneNumber"
                    placeholder="+62"
                    required
                    autoComplete="off"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Label>Buat Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    controlId="exampleForm.password"
                    type={showPassword ? "text" : "password"}
                    name="email"
                    placeholder="Buat Password"
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
                  Daftar
                </Button>
                <div className="mt-3 d-flex justify-content-center ">
                  <p>
                    Sudah punya akun?
                    <NavLink to="/login" className="linkLogin">
                      Masuk di sini
                    </NavLink>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

// <div className='Login'>
//   <img src={imgLeft} alt="img-left" className='img-left'/>
//   <form className='form-login' onSubmit={onSubmit}>
//         <p className='masuk-bold'>Daftar</p>
//         <label className='mb-3'>Nama</label>
//             <InputGroup hasValidation className='container-input-nama'>
//             <Form.Control
//               type="name"
//               aria-describedby="inputGroupPrepend"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className='input-nama'
//               placeholder='Nama Lengkap'
//             />
//           </InputGroup>
//             <label className='mb-3'>Email</label>
//             <InputGroup hasValidation className='container-input-email'>
//             <Form.Control
//               type="email"
//               aria-describedby="inputGroupPrepend"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className='input-email'
//               placeholder='Contoh:johndee@gmail.com'
//             />
//           </InputGroup>
//           <label className='mb-3'>Nomor Telepon</label>
//             <InputGroup hasValidation className='container-input-noTelepon'>
//             <Form.Control
//               type="phoneNumber"
//               aria-describedby="inputGroupPrepend"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className='input-noTelepon'
//               placeholder='+62.'
//             />
//           </InputGroup>
//             <label className='mb-3 mt-3'>Buat Password</label>
//             <InputGroup hasValidation className='container-input-password mb-3'>
//             <Form.Control
//               type={passwordType}
//               onChange={handlePasswordChange}
//               aria-describedby="inputGroupPrepend"
//               name="password"
//               value={password}
//               className='input-password'
//               placeholder='Buat Password'
//             />
//             <InputGroup.Text id="inputGroupPrepend" className='icon-visible'><AiFillEye onClick={togglePassword}/></InputGroup.Text>
//           </InputGroup>
//         <button type="submit" id="submit" className="bt-login-submit btn btn-primary">
//             Daftar
//         </button>
//         <p>Sudah punya akun?<NavLink to="/login">Masuk di sini</NavLink></p>
//     </form>
// </div>
