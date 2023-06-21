import React from 'react';
import imgLeft from "../img/img-left.jpg";
import {AiFillEye} from 'react-icons/ai';
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const data = { email, password };
      dispatch(login(data, navigate));
    };

    console.log(password);
    console.log(email);
  return (
    <div className='Login'>
      <img src={imgLeft} alt="img-left" className='img-left'/>
      <form className='form-login' onSubmit={onSubmit}>
            <p className='masuk-bold'>Masuk</p>
                <label className='mb-3'>Email/No Telepon</label>
                <InputGroup hasValidation className='container-input-email'>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  className='input-email'
                  placeholder='Contoh:johndee@gmail.com'
                />
              </InputGroup>
                <label className='mb-3 mt-3'>Password</label>
                <InputGroup hasValidation className='container-input-password mb-3'>
                <Form.Control
                  type={passwordType}
                  onChange={handlePasswordChange}
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  value={password}
                  className='input-password'
                  placeholder='Masukan Password'
                />
                <InputGroup.Text id="inputGroupPrepend" className='icon-visible'><AiFillEye onClick={togglePassword}/></InputGroup.Text>
              </InputGroup>
            <button type="submit" id="submit" className="bt-login-submit btn btn-primary">
                Masuk
            </button>
            <p>Belum punya akun?<NavLink to="/register">Daftar di sini</NavLink></p>
        </form>
    </div>
  )
}
