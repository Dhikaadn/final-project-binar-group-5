import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import none from "../img/none.jpg";
import { BsBox, BsHeart, BsArrowDownUp } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export const NoneSearch = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs lg="3">
          <Card>
            <Card.Body>
              <p className="fw-bold">Filter</p>
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <span>
                    {" "}
                    <BsBox className="me-2" />
                    Transit
                  </span>
                  <IoIosArrowForward />
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>
                    <BsHeart className="me-2" />
                    Harga
                  </span>
                  <IoIosArrowForward />
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>
                    <FiDollarSign className="me-2" />
                    Fasilitas
                  </span>
                  <IoIosArrowForward />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Button
            className="btFilter"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #7126b5",
              color: "#7126b5",
              borderRadius: "12px",
            }}
          >
            <BsArrowDownUp className="me-2" />
            Termurah
          </Button>

          <div className="text-center mt-5">
            <img src={none} alt="none search" className="mb-4" />
            <div className="d-flex flex-column ">
              <span className="fw-semibold">
                Maaf, pencarian Anda tidak ditemukan
              </span>
              <span className="text-coba">Coba cari perjalanan lainnya!</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
