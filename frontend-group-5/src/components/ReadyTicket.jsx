import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import paymentLogo from "../img/Image.png";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../redux/actions/detail';
import { getListPenerbangan } from '../redux/actions/search';
import { useNavigate } from "react-router-dom";
import { Penumpang } from "../redux/actions/penumpang";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsBox, BsHeart, BsArrowDownUp } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';


// import { kelas } from '../redux/actions/kelas';

export const ReadyTicket = () => {


    // dispatch -> to change the global state in redux
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useSelector -> to access the global state (redux)
    const { listPenerbangan } = useSelector((state) => state.search);
    const { penumpang } = useSelector((state) => state.penumpang);
    const { uuidUser } = useSelector((state) => state.auth);
    // console.log(uuidUser);
    useEffect(() => {
        dispatch(getListPenerbangan(), Penumpang());
    }, [dispatch]);

    // console.log(listPenerbangan[urutan].arrivalCity)
    // console.log(urutan)
    // console.log(listPenerbangan[urutan].arrivalCity)


    const handlePilih = (a) => {
        const airlineCode = listPenerbangan[a].airlineCode;
        const flightClass = listPenerbangan[a].airlineClass;
        const adultPassenger = penumpang.dewasa;
        const childrenPassenger = penumpang.anak;
        const babyPassenger = penumpang.bayi;
        const data = { airlineCode, flightClass, adultPassenger, childrenPassenger, babyPassenger };
        // const detail = { flightClass };
        dispatch(getDetail(data, navigate));
        // dispatch(kelas(detail));
    }

    return (
        <Container >
            <Row className='mt-5'>
                <Col xs lg="3">
                    <Card>
                        <Card.Body>
                            <p className='fw-bold'>Filter</p>
                            <div className="d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-between border-bottom pb-2">
                                    <span > <BsBox className='me-2' />Transit</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-2">
                                    <span >
                                        <BsHeart className='me-2' />Harga</span>
                                    <IoIosArrowForward />
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-2">

                                    <span >
                                        <FiDollarSign className='me-2' />Fasilitas</span>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Button className='btFilter'
                        style={{
                            backgroundColor: "transparent",
                            border: "1px solid #7126b5", color: "#7126b5", borderRadius: "12px"
                        }}>
                        <BsArrowDownUp className="me-2" />Termurah</Button>


                        <Accordion className='mt-5'>
                        {listPenerbangan?.length > 0 &&
                            listPenerbangan.map((list, index) => (
                                <Accordion.Item eventKey={index} key={index} className="my-3 border">
                                    <Accordion.Header >
                                        <img className='me-3' src={paymentLogo} alt="logo maskapai" />
                                        {list.airlineName} - {list.airlineClass}
                                    </Accordion.Header>
                                    <div className='m-2'>
                                        <Col>
                                            <div className="d-flex justify-content-between align-items-center pe-4 acordioRespon">
                                                <span className='fw-bold'>{list.departureTime}</span>

                                                <span className='border-bottom pb-2'>{list.longFlight}</span>
                                                <span className='fw-bold'>{list.arrivalTime}</span>
                                                {/* <img src={time} width="20" height="20" className='ms-4 mt-3' alt='time-logo' /> */}
                                                <span className='fw-bold' style={{ color: "#7126b5", fontSize: "18px" }}>IDR {list.airlinePrice}</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="d-flex justify-content-between align-items-center pt-2 acordioRespon">
                                                <span>{list.departureCity}</span>
                                                <span className=''>Direct</span>
                                                <span>{list.arrivalCity}</span>
                                                <Button style={{ background: "#7126b5", border: "none" }} className="px-5" onClick={(e) => handlePilih(index)}>
                                                    Pilih
                                                </Button>
                                            </div>
                                        </Col>
                                    </div>

                                    <Accordion.Body>
                                        {/* row 1 */}
                                        <div className='border-bottom'>
                                            <p className='fw-bold'>Detail Penerbangan</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className='fw-bold fs-5'>{list.departureTime}</span>
                                                <span className='text_label'> Keberangkatan </span>
                                            </div>
                                            <span>{list.departureDate}</span>
                                            <p className='fw-semibold'>{list.departureCity}</p>
                                        </div>
                                        {/* row 2 */}
                                        <div className="border-bottom">

                                            <div className='d-flex flex-column fw-bold my-3 ps-5'>
                                                <span>{list.airlineName}-{list.airlineClass}</span>
                                                <span>{list.airlineCode}</span>
                                            </div>
                                            <div className="ps-3">

                                                <span className='fw-bold'>
                                                    <img src={paymentLogo} alt="paymentLogo" className='pe-2' /> Informasi:
                                                </span>
                                            </div>

                                            <div className='d-flex flex-column ps-5 mb-3'>
                                                <span>Baggage {list.checkedBaggage} kg</span>
                                                <span>Cabin baggage {list.cabinBaggage} kg</span>
                                                <span>In Flight Entertainment</span>
                                            </div>
                                        </div>
                                        {/* row 3 */}
                                        <div className="my-4">

                                            <div className='d-flex justify-content-between'>
                                                <span className='fw-bold'>{list.arrivalTime}</span>
                                                <span className='text_label'>Kedatangan</span>
                                            </div>
                                            <div className='d-flex flex-column'>

                                                <span>{list.arrivalDate}</span>
                                                <span className='fw-semibold'>{list.arrivalCity}</span>

                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                            </Accordion>
                </Col>

            </Row>
        </Container>
    )
}

