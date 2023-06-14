import React, { useState } from 'react'
import './styleRiwayat.css'
import logo from './../../img/🦆 illustration _Cart shopping list_.png'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { HiArrowLeft } from 'react-icons/hi';
import { BiFilterAlt } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { NavbarBeranda } from '../../components/NavbarBeranda';

const RiwayatNull = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <NavbarBeranda/>

        <Container className='border-bottom'>
            <Row className='mb-4 btn-back'>
                    <div className="title_pesanan">
                        <p className='fw-bold mt-5 fs-3'>Riwayat Pemesanan</p>
                    </div>
                <Col className='d-flex justify-content-between align-items-center'>
                    <div className='textBtn_back'>
                        <Button style={{ background: "none", border: "none"}}>
                                <HiArrowLeft/>
                        </Button> Beranda 
                    </div>
                    <div className='btn-filter'>
                        <Button className="px-3 btn-filter" style={{ border: "2px solid #7126B5", borderRadius: "25px",color: "#000", background:"none"}} >
                        <BiFilterAlt className='pe-2' style={{color: "gray"}}/>Filter</Button>
                    <BsSearch onClick={handleShow} className='ps-3 fs-4' style={{cursor: "pointer", color: "#7126B5"}}/>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col className='text-center'>
                    <img src={logo} alt='logo' className='my-5 mb-5'/>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                        <span className='text-done fs-6'>Oops! Riwayat Pemesanan Kosong!</span>
                        <span className='fs-5'>Anda Belum Melakukan Riwayat Pemesanan</span>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col className='justify-content-center d-flex '>
                <Button className=' mt-3' style={{ background: "#A06ECE", border: "none", width: "50%"}}>Cari Penerbangan</Button>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='d-flex align-items-center' >
                <InputGroup className="pe-3" >
                    <InputGroup.Text id="basic-addon1"><BsSearch/></InputGroup.Text>
                    <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between">
                    <p>Pencarian Terkini</p>
                    <p style={{color:"red"}} >Hapus</p>
                </div>
                <div className="d-flex justify-content-between border-bottom pt-3">
                    <p>2313123</p>
                    <AiOutlineClose />
                </div>
                <div className="d-flex justify-content-between border-bottom pt-2">
                    <p>2313123</p>
                    <AiOutlineClose />
                </div>
            </Modal.Body>
        </Modal>
    </>
)
}

export default RiwayatNull