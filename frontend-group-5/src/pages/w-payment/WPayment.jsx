import React, { useState,useEffect } from 'react'
import './stylePayment.css'
import { Accordion, Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl';
import visaLogo from './../../img/visa logo.png'
import masterCardLogo from './../../img/mastercard logo.png'
import payPalLogo from './../../img/paypal logo.png'
import AmexLogo from './../../img/amex logo.png'
import paymentLogo from './../../img/Image.png'
import notifLogo from './../../img/notif.png'
import { NavbarBeranda } from '../../components/NavbarBeranda'
import { useDispatch, useSelector } from "react-redux";
import { pesan } from '../../redux/actions/pemesanan';
import { getDetail } from '../../redux/actions/detail';
import { useNavigate } from "react-router-dom";
import { Penumpang } from '../../redux/actions/penumpang';

// import Countdown from '../w-biodata/Countdown'

const WPayment = () => {
    const [showAlert, setShowAlert] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pemesanan } = useSelector((state) => state.pemesanan);
    const { detail } = useSelector((state) => state.detail);
    const { penumpang } = useSelector((state) => state.penumpang);



    useEffect(() => {
        dispatch(pesan(),getDetail(),Penumpang());
    }, [dispatch]);


    return (
        <>
        <NavbarBeranda/>
            <Container className='border-bottom '>
                <Row>
                    <Container className='pt-4'>
                        
                        <p className='alertNotif_danger d-flex justify-content-center align-items-center'>Selesaikan Pembayaran Anda Sebelum Tanggal 10 Maret 2023</p>
                        {/* <div className="countdown">
                            <Countdown seconds={2} />
                        </div> */}
                    </Container>
                </Row>
            </Container>

        <Container className='mt-4'>
            <Row className='container_form'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='pb-3 fw-bold'>Isi Data Pembayaran </Card.Title>
                            
                            <Form.Group className="form_payment mb-3 px-4 d-flex justify-content-between align-items-center">
                                <Form.Label>Gopay</Form.Label>
                                <SlArrowDown/>
                            </Form.Group>

                            <Form.Group className="form_payment mb-3 px-4 d-flex justify-content-between align-items-center" >
                                <Form.Label >Virtual Account</Form.Label>
                                <SlArrowDown/>
                            </Form.Group>
                            
                            <Accordion defaultActiveKey="0" className='shadow-none'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Credit Card</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className='my-3'>
                                            <Col className='img_payment d-flex justify-content-center align-items-center'>
                                                <img src={masterCardLogo} className='mx-2' alt='logoPayment'/>
                                                <img src={visaLogo} className='mx-2' alt='logoPayment'/>
                                                <img src={AmexLogo} className='mx-2' alt='logoPayment'/>
                                                <img src={payPalLogo} className='mx-2' alt='logoPayment'/>
                                            </Col>
                                        </Row>

                                    <Form.Group className="mt-4 mb-3 border-bottom" controlId="cardNumber">
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="number" placeholder="123456789" className='border-0'/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 border-bottom" controlId="cardName">
                                        <Form.Label>Card Holder Name</Form.Label>
                                        <Form.Control type="text" placeholder="John Doe" className='border-0'/>
                                    </Form.Group>
                                    
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3 border-bottom" controlId="cw">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="text" placeholder="000" className='border-0'/>
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group className="mb-3 border-bottom" controlId="expiradeDate">
                                                <Form.Label>Expired Date</Form.Label>
                                                <Form.Control type="text" placeholder="07/24" className='border-0'/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Button className='w-100 mt-3 mb-4' style={{ background: "#FF0000", border: "none"}} as={Link} to={'/paymentdone'}>Bayar</Button>
                </Col>

                <Col className='mb-3'>
                    <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <p className='fw-bolder fs-4'>Booking Code: </p>
                                <p className='text_paymentTitle ps-2 fw-bolder'>{pemesanan.bookingCode}</p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between">
                                <span className='fs-6 fw-bolder'>{pemesanan.departureTime}</span>
                                <span className='text_paymentTitle2 ps-2 fw-bolder'>Keberangkatan</span>
                            </div>

                            <div className="">
                                <span className='fs-6'>{pemesanan.departureDate}</span>
                                <p className='fs-6 border-bottom pb-3'>{pemesanan.departureAirport}</p>
                            </div>

                            <div className="border-bottom">

                            <span className='fs-6 fw-bold ps-4'>{detail.airlineName}</span>
                            <p className='fs-6 fw-bold ps-4'>{detail.airlineCode}</p>
                            <div className="d-flex flex-column">
                                <span className='fs-6 fw-bold '><img src={paymentLogo} alt='paymentLogo'/> Informasi:</span>
                                <span className='fs-6 ps-4 pt-1'>Baggage {detail.checkedBaggage} kg</span>
                                <span className='fs-6 ps-4'>Cabin baggage {detail.cabinBaggage} kg</span>
                                <span className='fs-6 pb-2 ps-4'>In Flight Entertainment</span>
                            </div>
                            </div>

                            <div className="border-bottom">

                                <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                                    <span className=' fw-bolder'>{detail.arrivalTime}</span>
                                    <span className='text_paymentTitle2 ps-2 fw-bolder '>Kedatangan</span>
                                </div>
                                <span className='fs-6'>{detail.arrivalDate}</span>
                                <p className='fs-6 '>{detail.arrivalAirport}</p>
                            </div>
                            <div className="pt-3 border-bottom">

                            <span className='pt-3 fw-bolder'>Rincian Harga</span>
                            

                            {penumpang.dewasa !== 0 && (
                        <div className="d-flex align-items-center justify-content-between fs-6">
                          <span className=" ">{penumpang.dewasa} Adults</span>
                          <span className=" ">IDR {detail.adultPrice}</span>
                        </div>
                      )}

                      {penumpang.anak !== 0 && (
                        <div className="d-flex align-items-center justify-content-between fs-6">
                          <span className=" ">{penumpang.anak} Children </span>
                          <span className=" ">IDR {detail.childPrice}</span>
                        </div>
                      )}
                      {penumpang.bayi !== 0 && (
                        <div className="d-flex align-items-center justify-content-between fs-6">
                          <span className=" ">{penumpang.bayi} Baby</span>
                          <span className=" ">IDR {detail.infantPrice}</span>
                        </div>
                      )}
                      <div className="d-flex align-items-center justify-content-between fs-6 pb-3">
                        <span className=" ">Tax </span>
                        <span className="  ">IDR 300.000</span>
                      </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                                    <span className=' fw-bolder'>Total </span>
                                    <span className='text_paymentTitle ps-2 fw-bolder fs-5 '>IDR {detail.totalPrice}</span>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


        {showAlert && (
            <div className='alert-payment '>
                <Alert variant='light' onClose={!setShowAlert} dismissible>
                    <div className="border-bottom pb-4"></div>
                    <div className='py-2 d-flex justify-content-between align-items-center text-alert'>
                        <span><img src={notifLogo} className='w-auto' alt='logoNotif'/> Status Pembayaran (Unpaid)</span>
                        <span >20 Maret, 14:00</span>
                    </div>
                    <p className='ms-4 fw-bold'> Selesaikan Pembayaran Anda Sebelum Tanggal 10 Maret 2023</p>
                    
                </Alert>
            </div>
        )} 
        
        </>
    )
}

export default WPayment