import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import paymentLogo from './../../img/Image.png'
import arrowLogo from './../../img/Thin (Stroke).png'

const DetailRiwayat = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleOnClick = () => {
        setShowDetails(!showDetails);
    };

    return (
    <>
        <Container className='mt-4'>
            <Row>
                <Col>
                    <h5>Maret 2023</h5>
                    <Card className='card_active' onClick={handleOnClick}>
                        <Card.Body >
                            <Col>
                                <p className='pb-3 card_tittle'>Issued</p>
                                <Col className="card_body ">
                                    <div className='border-bottom d-flex justify-content-between'>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>jakarta</span>
                                            <span className='text-calender'>5 Maret 2023</span>
                                        </div>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span >4h 0m</span>
                                            <img src={arrowLogo} alt='paymentLogo' />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>jakarta</span>
                                            <span className='text-calender'> 5 Maret 2023</span>
                                        </div>
                                    </div>

                                    <div className='my-2 d-flex justify-content-between'>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>Booking Code:</span>
                                            <span>6723y2GHK</span>
                                        </div>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span >Class:</span>
                                            <span >Economy</span>
                                        </div>
                                        <div className=''>
                                            <span className='fw-bold pe-1'>IDR</span>
                                            <span className='fw-bold'>9.850.000</span>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                {showDetails && (
                    <Col>
                        <Card className='border-0'>

                            <Card.Body>
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
                                    <div className="d-flex align-items-center justify-content-between fs-6 pt-2">
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
                )}
            </Row>

            <Row>
                <Col>
                        <h5>Maret 2023</h5>
                    <Card className='card_active' onClick={handleOnClick}>
                        <Card.Body >
                            <Col>
                                <p className='pb-3 card_tittle'>Issued</p>
                                <Col className="card_body ">
                                    <div className='border-bottom d-flex justify-content-between'>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>jakarta</span>
                                            <span>5 Maret 2023</span>
                                        </div>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span >4h 0m</span>
                                            <img src={arrowLogo} alt='paymentLogo' />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>jakarta</span>
                                            <span>5 Maret 2023</span>
                                        </div>
                                    </div>

                                    <div className='my-2 d-flex justify-content-between'>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>Booking Code:</span>
                                            <span>6723y2GHK</span>
                                        </div>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span >Class:</span>
                                            <span >Economy</span>
                                        </div>
                                        <div className=''>
                                            <span className='fw-bold pe-1'>IDR</span>
                                            <span className='fw-bold'>9.850.000</span>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                {showDetails && (
                    <Col>
                        <Card className='border-0'>
                            <Card.Body>
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
                                    <div className="d-flex align-items-center justify-content-between fs-6 pt-2">
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
                )}
            </Row>
        </Container>
    
    </>
);
};

export default DetailRiwayat;
