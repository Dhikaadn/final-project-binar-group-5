import React, { useState } from 'react'
import './styleBiodata.css'
import { Accordion, Button, Card, CloseButton, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import paymentLogo from './../../img/Image.png'
import HideShowForm from '../../controller/HideShowForm'
import { NavbarBeranda } from '../../components/NavbarBeranda'

const WbiodataPemesanan = () => {

    const [showmodal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [isOn, setIsOn] = useState(false);
    const handleSwitch = () => {
        setIsOn(!isOn);
    };



    return (
        <>
        {/* ===== NAVBAR ====== */}
        <NavbarBeranda/>

            <Container className='mt-3'>
                <Row className='containerrr_form'>
                    <Col className='form_inputBiodata'>
                        <Accordion >
                            <Card >
                                <Card.Body>
                                    <Card.Title className='pb-3 fw-bold'>Isi Data Pemesan</Card.Title>
                                    <Card.Text className='title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4'>
                                        Data Diri Pemesan
                                    </Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text_label'>Nama Lengkap</Form.Label>
                                            <Form.Control type="text" placeholder="Harry" id='name' autoComplete='off'/>
                                        </Form.Group>

                                        <Form.Group className="mb-3 d-flex justify-content-between" >
                                            <Form.Label >Punya Nama Keluarga?</Form.Label>
                                            <HideShowForm eventKey="0" onClick={handleSwitch}/>
                                        </Form.Group>

                                        <Accordion.Collapse eventKey="0">
                                            <Form >
                                                <Form.Group className="mb-3">
                                                    <Form.Label className='text_label'>Nama Keluarga</Form.Label>
                                                    <Form.Control type="text" placeholder="Potter" id='nameKeluarga'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Nomor Telepon</Form.Label>
                                                    <Form.Control type="number" placeholder="0812345678" id='noHp'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" id='email'/>
                                                </Form.Group>
                                            </Form>
                                        </Accordion.Collapse>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion>

                        <Accordion >
                            <Card className='mt-4'>
                                <Card.Body>
                                    <Card.Title className='pb-3 fw-bold'>Isi Data Penumpang</Card.Title>
                                    <Card.Text className='title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4'>
                                        Data Diri Penumpang 1 - Adult
                                    </Card.Text>
                                    
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text_label'>Title</Form.Label>
                                            <Form.Select id='title' >
                                                <option >Mr.</option>
                                                <option value="1">Mrs.</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text_label' aria-label='Nama Lengkap'>Nama Lengkap</Form.Label>
                                            <Form.Control type="text" placeholder="Harry" id='name' autoComplete='off'/>
                                        </Form.Group>

                                        <Form.Group className="mb-3 d-flex justify-content-between" >
                                            <Form.Label >Punya Nama Keluarga?</Form.Label>                                        
                                            <HideShowForm eventKey="1" onClick={handleSwitch}/>
                                        </Form.Group>

                                        <Accordion.Collapse eventKey="1">
                                            <Form>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Nama Keluarga</Form.Label>
                                                    <Form.Control type="text" placeholder="Potter" id='nameKeluarga'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Tanggal Lahir</Form.Label>
                                                    <Form.Control type="date" placeholder="dd/mm/yyyy" id='ttl'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Kewarganegaraan</Form.Label>
                                                    <Form.Control type="text" placeholder="Indonesia" id='negara'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>KTP/Paspor</Form.Label>
                                                    <Form.Control type="text" placeholder="" id='paspor'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Negara penerbit</Form.Label>
                                                    <Form.Control type="text" placeholder="" id='penerbit'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Berlaku Sampai</Form.Label>
                                                    <Form.Control type="date" placeholder="dd/mm/yyyy" id='expired'/>
                                                </Form.Group>
                                            </Form>
                                        </Accordion.Collapse>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion>

                        <Accordion >
                            <Card className='mt-4'>
                                <Card.Body>
                                    <Card.Title className='pb-3 fw-bold'>Isi Data Penumpang</Card.Title>
                                    <Card.Text className='title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4'>
                                        Data Diri Penumpang 1 - Adult
                                    </Card.Text>
                                    
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text_label'>Title</Form.Label>
                                            <Form.Select id='title' >
                                                <option >Mr.</option>
                                                <option value="1">Mrs.</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text_label' aria-label='Nama Lengkap'>Nama Lengkap</Form.Label>
                                            <Form.Control type="text" placeholder="Harry" id='name' autoComplete='off'/>
                                        </Form.Group>

                                        <Form.Group className="mb-3 d-flex justify-content-between" >
                                            <Form.Label >Punya Nama Keluarga?</Form.Label>                                        
                                            <HideShowForm eventKey="2" onClick={handleSwitch}/>
                                        </Form.Group>

                                        <Accordion.Collapse eventKey="2">
                                            <Form>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Nama Keluarga</Form.Label>
                                                    <Form.Control type="text" placeholder="Potter" id='nameKeluarga'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Tanggal Lahir</Form.Label>
                                                    <Form.Control type="date" placeholder="dd/mm/yyyy" id='ttl'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Kewarganegaraan</Form.Label>
                                                    <Form.Control type="text" placeholder="Indonesia" id='negara'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>KTP/Paspor</Form.Label>
                                                    <Form.Control type="text" placeholder="" id='paspor'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Negara penerbit</Form.Label>
                                                    <Form.Control type="text" placeholder="" id='penerbit'/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text_label'>Berlaku Sampai</Form.Label>
                                                    <Form.Control type="date" placeholder="dd/mm/yyyy" id='expired'/>
                                                </Form.Group>
                                            </Form>
                                        </Accordion.Collapse>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion>
                                    

                        <div className="button-wrapper position-relative">
                            <Button className='my-5 w-100' as={Link} to={'/biodata_pemesanan2'} style={{ background: "#7126B5", border: "none"}}>
                                Simpan
                            </Button>
                            <Button className='my-5 w-100' onClick={handleShowModal}>
                                Simpan Modal
                            </Button>
                        </div>

                        <Modal show={showmodal} onHide={handleCloseModal} backdrop="static" keyboard={false} className='pt-5'>
                            <div className='modal_content'>
                                <span className='ps-2'>
                                    Anda Harus Login Terlebih Dahulu!
                                </span>
                                <CloseButton onClick={handleCloseModal} variant='white' aria-label='close' className='fs-6 ms-3'/>
                            </div>
                        </Modal>
                                
                    </Col>

                    <Col >
                        <Container >
                            <Col className='form_Detail'>
                                <Card className='border-0 '>
                                    <Card.Body >
                                        <div className="d-flex align-items-center">
                                            <p className='fw-bolder fs-4'>Detail Penerbangan </p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className='fs-6 fw-bolder'>07:00 </span>
                                            <span className='text_paymentTitle2 ps-2 fw-bolder'>Keberangkatan</span>
                                        </div>

                                        <div className="">
                                            <span className='fs-6'>3 Maret 2023</span>
                                            <p className='fs-6 border-bottom pb-3'>Soekarno Hatta - Terminal 1A Domestik</p>
                                        </div>

                                        <div className="border-bottom">
                                            <span className='fs-6 fw-bold ps-4'>Jet Air - Economy</span>
                                            <p className='fs-6 fw-bold ps-4'>JT - 203</p>
                                            <div className="d-flex flex-column">
                                                <span className='fs-6 fw-bold '><img src={paymentLogo} alt='paymentLogo' /> Informasi:</span>
                                                <span className='fs-6 ps-4 pt-1'>Baggage 20 kg</span>
                                                <span className='fs-6 ps-4'>Cabin baggage 7 kg</span>
                                                <span className='fs-6 pb-2 ps-4'>In Flight Entertainment</span>
                                            </div>
                                        </div>

                                        <div className="border-bottom">
                                            <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                                                <span className=' fw-bolder'>11:00 </span>
                                                <span className='text_paymentTitle2 ps-2 fw-bolder '>Kedatangan</span>
                                            </div>
                                            <span className='fs-6'>3 Maret 2023</span>
                                            <p className='fs-6 '>Melbourne International Airport</p>
                                        </div>
                                                
                                        <div className="pt-3 border-bottom">
                                            <span className='pt-3 fw-bolder'>Rincian Harga</span>
                                            <div className="d-flex align-items-center justify-content-between fs-6">
                                                <span className=' '>2 Adults </span>
                                                <span className=' '>IDR 9.550.000</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between fs-6">
                                                <span className=' '>1 Baby </span>
                                                <span className=' '>IDR 0</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between fs-6 pb-3">
                                                <span className=' '>Tax </span>
                                                <span className='  '>IDR 300.000</span>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                                            <span className=' fw-bolder'>Total </span>
                                            <span className='text_paymentTitle ps-2 fw-bolder fs-5 '>IDR 9.850.000</span>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Container>
                    </Col>                    
                
                </Row>
            </Container>
        </>
    )
}

export default WbiodataPemesanan