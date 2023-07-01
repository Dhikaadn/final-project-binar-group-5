import React from 'react';
import loading from '../img/loading.jpg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BsBox, BsHeart, BsArrowDownUp } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

export const LoadingBeranda = () => {
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


            <div className='text-center mt-5'>
        <div className="d-flex flex-column ">

        <span className='fw-semibold'>Mencari penerbangan terbaik...</span>
        <span className='opacity-50'>Loading</span>
        </div>
        <img src={loading} alt='loading'className='mb-4'/>
    </div>
    </Col>

</Row>
</Container>
  )
}
