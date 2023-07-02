import React, { useEffect, useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import {
  InputGroup,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import IconNotif from "../img/notifikasi_icon.svg";
import { Link } from "react-router-dom";
import { getListNotifikasi } from "../redux/actions/notifikasi";
import { useDispatch, useSelector } from "react-redux";
function Notifikasi() {
  const dispatch = useDispatch();
  const { uuidUser } = useSelector((state) => state.auth);
  const { listNotifikasi } = useSelector((state) => state.notifikasi);
  // console.log(listNotifikasi);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Filter hasil pencarian berdasarkan searchText, category, dan tanggal
    const filteredResults = listNotifikasi.filter((result) => {
      const isMatch =
        result.body.toLowerCase().includes(searchText.toLowerCase()) ||
        result.title.toLowerCase().includes(searchText.toLowerCase());
      // result.tanggal.toLowerCase().includes(searchText.toLowerCase());
      return isMatch;
    });

    setSearchResults(filteredResults);
  }, [listNotifikasi, searchText]);

  useEffect(() => {
    // Dispatch action saat halaman dimuat
    // console.log("hallo");
    dispatch(getListNotifikasi(uuidUser));
  }, []);

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
              <Button
                style={{ background: "none", border: "none" }}
                as={Link}
                to="/"
              >
                <HiArrowLeft className="fs-5" />
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
                <span>Filter</span>
              </Button>
              <BsSearch
                onClick={handleShow}
                className="ms-3 fs-5"
                style={{ cursor: "pointer", color: "#7126B5" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <InputGroup style={{ width: "20rem" }}>
            <InputGroup.Text>
              <img src={IconSearch} alt="Search Icon" />
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup> */}
      <Container
        className="w-75"
        style={{ maxHeight: "480px", overflowY: "auto" }}
      >
        {searchResults.map((result) => (
          <div key={result.id} className="card-result">
            <img src={IconNotif} className="notifikasi_img" />
            <div className="w-100">
              <div className="result-item">
                <div className="category">{result.title}</div>
                <div className="tanggal">{result.tanggal}</div>
              </div>
              <div className="isi">{result.body}</div>
            </div>
          </div>
        ))}
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Notifikasi;
