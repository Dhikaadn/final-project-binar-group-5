import React from 'react';
import imgLeft from "../img/img-left.jpg";
import {AiFillEye} from 'react-icons/ai';
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { toast } from "react-toastify";


export const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
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
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {name, email, phoneNumber, password};
    dispatch(register(data, navigate));
  };
  return (
    <div className='Login'>
      <img src={imgLeft} alt="img-left" className='img-left'/>
      <form className='form-login' onSubmit={onSubmit}>
            <p className='masuk-bold'>Daftar</p>
            <label className='mb-3'>Nama</label>
                <InputGroup hasValidation className='container-input-nama'>
                <Form.Control
                  type="name"
                  aria-describedby="inputGroupPrepend"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='input-nama'
                  placeholder='Nama Lengkap'
                />                
              </InputGroup>
                <label className='mb-3'>Email</label>
                <InputGroup hasValidation className='container-input-email'>
                <Form.Control
                  type="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input-email'
                  placeholder='Contoh:johndee@gmail.com'
                />                
              </InputGroup>
              <label className='mb-3'>Nomor Telepon</label>
                <InputGroup hasValidation className='container-input-noTelepon'>
                <Form.Control
                  type="phoneNumber"
                  aria-describedby="inputGroupPrepend"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className='input-noTelepon'
                  placeholder='+62.'
                />                
              </InputGroup>
                <label className='mb-3 mt-3'>Buat Password</label>
                <InputGroup hasValidation className='container-input-password mb-3'>
                <Form.Control
                  type={passwordType}
                  onChange={handlePasswordChange}
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  value={password}
                  className='input-password'
                  placeholder='Buat Password'
                />
                <InputGroup.Text id="inputGroupPrepend" className='icon-visible'><AiFillEye onClick={togglePassword}/></InputGroup.Text>
              </InputGroup>
            <button type="submit" id="submit" className="bt-login-submit btn btn-primary">
                Daftar
            </button>
            <p>Sudah punya akun?<NavLink to="/login">Masuk di sini</NavLink></p>
        </form>
    </div>
  )
}
