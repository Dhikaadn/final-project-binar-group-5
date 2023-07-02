import React from 'react'
import './stylePayment.css'
import logo from './../../img/🦆 illustration _Cart shopping list_.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavbarBeranda } from './../../components/NavbarBeranda'
import {Link} from 'react-router-dom'

const donePayment = () => {
  return (
    <>
      <NavbarBeranda/>
        <Container className='mt-3'>
          <Row>
            <Col className='text-center'>
              <img src={logo} alt='logo' className='my-5 mb-5 w-auto'/>
              <p className='fw-semibold text-done fs-6'>Selamat!</p>
              <p className='fw-bold fs-5'>Transaksi Pembayaran Tiket Berhasil</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <Button className='btn-done' as={Link} to={"/riwayat"} style={{ background: "#7126B5", border: "none", width: "50%"}}>Terbitkan Tiket</Button>
            <Button className='btn-done mt-3' as={Link} to={"/"} style={{ background: "#A06ECE", border: "none", width: "50%"}}>Cari Penerbangan Lain</Button>
          </div>
        </Container>
    </>
  )
}

export default donePayment