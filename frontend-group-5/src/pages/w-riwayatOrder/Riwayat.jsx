import React, { useEffect, useState } from "react";
import "./styleRiwayat.css";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import DetailRiwayat from "./DetailRiwayat";
import { HiArrowLeft } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { NavbarBeranda } from "../../components/NavbarBeranda";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListRiwayat } from "../../redux/actions/riwayat";
import axios from "axios";
import RiwayatNull from "./RiwayatNull";
import { Link } from 'react-router-dom';


const Riwayat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uuidUser } = useSelector((state) => state.auth);

  //   const [listRiwayat, setListRiwayat] = useState([]);
  console.log(uuidUser);

  useEffect(() => {
    // Dispatch action saat halaman dimuat
    console.log("hallo");
    dispatch(getListRiwayat(uuidUser));
  }, []);

  const { listRiwayat } = useSelector((state) => state.riwayat);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavbarBeranda />

      <Container className="border-bottom">
        <Row className="mb-4 btn-back">
          <div className="title_pesanan">
            <p className="fw-bold mt-5 fs-4">Riwayat Pemesanan</p>
          </div>
          <Col className="d-flex justify-content-between align-items-center">
            <div className="textBtn_back">
              <Button style={{ background: "none", border: "none" }} as={Link} to="/">
                <HiArrowLeft  className='fs-5'/>
              </Button>{" "}
              <span>Beranda</span>
            </div>
            <div className="btn-filter">
              <Button
                className="px-3 btn-filter"
                style={{
                  border: "1px solid #7126B5",
                  borderRadius: "25px",
                  color: "#000",
                  background: "none",
                }}
              >
                <BiFilterAlt className="pe-2 fs-3" style={{ color: "gray" }} />
                <span>Filter
              </span></Button>
              <BsSearch
                onClick={handleShow}
                className="ms-3 fs-5"
                style={{ cursor: "pointer", color: "#7126B5" }}
              />
            </div>
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
        <Modal.Body>
          <div className="d-flex justify-content-between">
            <p>Pencarian Terkini</p>
            <p style={{ color: "red" }}>Hapus</p>
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

      {listRiwayat.length === 0 ? <RiwayatNull /> : <DetailRiwayat />}
    </>
  );
};

export default Riwayat;
