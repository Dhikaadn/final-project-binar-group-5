import React from 'react';
import imgLeft from "../img/img-left.jpg";
import {AiFillEye} from 'react-icons/ai';
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
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
  return (
    <div className='Login'>
      <img src={imgLeft} alt="img-left" className='img-left'/>
      <form className='form-login'>
            <p className='masuk-bold'>Masuk</p>
                <label className='mb-3'>Email/No Telepon</label>
                <InputGroup hasValidation className='container-input-email'>
                <Form.Control
                  type="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  className='input-email'
                />
              </InputGroup>
                <label className='mb-3 mt-3'>Password</label>
                <InputGroup hasValidation className='container-input-password mb-3'>
                <Form.Control
                  type={passwordType}
                  onChange={handlePasswordChange}
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  value={passwordInput}
                  className='input-password'
                />
                <InputGroup.Text id="inputGroupPrepend" className='icon-visible'><AiFillEye onClick={togglePassword}/></InputGroup.Text>
              </InputGroup>
            <button type="submit" id="submit" className="bt-login-submit btn btn-primary">
                Masuk
            </button>
        </form>
    </div>
  )
}
