import React, { useState } from "react";
import "./styleRiwayat.css";
import logo from "./../../img/🦆 illustration _Cart shopping list_.png";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const RiwayatNull = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <img src={logo} alt="logo" className="my-5 mb-5" />
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
              <span className="text-done fs-6">
                Oops! Riwayat Pemesanan Kosong!
              </span>
              <span className="fs-5">
                Anda Belum Melakukan Riwayat Pemesanan
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="justify-content-center d-flex ">
          <Button
              className=" mt-3"
              style={{ background: "#A06ECE", border: "none", width: "50%" }}
              as={Link} to="/"
            >
              Cari Penerbangan
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex align-items-center">
          <InputGroup className="pe-3">
            <InputGroup.Text id="basic-addon1">
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Header>
        
      </Modal>
    </>
  );
};

export default RiwayatNull;
