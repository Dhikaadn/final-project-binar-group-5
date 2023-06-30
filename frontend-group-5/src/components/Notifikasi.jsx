import React, { useEffect, useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import { InputGroup, Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import { HiArrowLeft } from 'react-icons/hi';
import { BiFilterAlt } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import IconNotif from "../img/notifikasi_icon.svg";
import { Link } from "react-router-dom";

function Notifikasi() {

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
    const results = [
      {
        id: 1,
        category: "Promosi",
        isi: "Dapatkan Potongan 50% Tiket!",
        tanggal: "5 Maret, 14:04",
      },
      {
        id: 2,
        category: "Notifikasi",
        isi: "Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!",
        tanggal: "20 Maret, 14:04",
      },
      {
        id: 3,
        category: "Promosi",
        isi: "Diskon Spesial untuk Pelanggan Setia!",
        tanggal: "10 Maret, 10:30",
      },
      {
        id: 4,
        category: "Notifikasi",
        isi: "Kode booking 78HJ2 Anda telah dikonfirmasi. Cek email Anda untuk detail perjalanan.",
        tanggal: "10 Maret, 09:15",
      },
      {
        id: 5,
        category: "Notifikasi",
        isi: "Penerbangan dengan kode booking 23RT5 telah dibatalkan. Mohon hubungi layanan pelanggan untuk informasi lebih lanjut.",
        tanggal: "15 Maret, 16:30",
      },
      {
        id: 6,
        category: "Promosi",
        isi: "Promo Terbatas: Beli 1 Gratis 1!",
        tanggal: "15 Maret, 12:15",
      },
      {
        id: 7,
        category: "Promosi",
        isi: "Diskon Heboh Akhir Tahun!",
        tanggal: "25 Maret, 09:45",
      },
      {
        id: 8,
        category: "Promosi",
        isi: "Promo Spesial Hari Raya!",
        tanggal: "20 Maret, 16:30",
      },
    ];

    // Filter hasil pencarian berdasarkan searchText, category, dan tanggal
    const filteredResults = results.filter((result) => {
      const isMatch =
        result.isi.toLowerCase().includes(searchText.toLowerCase()) ||
        result.category.toLowerCase().includes(searchText.toLowerCase()) ||
        result.tanggal.toLowerCase().includes(searchText.toLowerCase());
      return isMatch;
    });

    setSearchResults(filteredResults);
  }, [searchText]);

  return (
    <>
      <NavbarBeranda />
      <Container className='border-bottom'>
            <Row className='mb-4 btn-back'>
                    <div className="title_pesanan">
                        <p className='fw-bold mt-5 fs-4'>Riwayat Pemesanan</p>
                    </div>
                <Col className='d-flex justify-content-between align-items-center'>
                    <div className='textBtn_back'>
                        <Button style={{ background: "none", border: "none"}} as={Link} to="/">
                                <HiArrowLeft className='fs-5'/>
                        </Button> <span>Beranda</span> 
                    </div>
                    <div className='btn-filter'>
                        <Button className="px-3 btn-filter" style={{ border: "1px solid #7126B5", borderRadius: "25px",color: "#000", background:"none"}} >
                        <BiFilterAlt className='pe-2 fs-3' style={{color: "gray"}}/><span>Filter</span></Button>
                    <BsSearch onClick={handleShow} className='ms-3 fs-5' style={{cursor: "pointer", color: "#7126B5"}}/>
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
      <Container className="w-75"
        style={{ maxHeight: "480px", overflowY: "auto" }}
      >
        {searchResults.map((result) => (
          <div key={result.id} className="card-result">
            <img src={IconNotif} className="notifikasi_img" />
            <div className="w-100">
              <div className="result-item">
                <div className="category">{result.category}</div>
                <div className="tanggal">{result.tanggal}</div>
              </div>
              <div className="isi">{result.isi}</div>
            </div>
          </div>
        ))}
      </Container>

      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='d-flex align-items-center' >
                <InputGroup className="pe-3" >
                    <InputGroup.Text id="basic-addon1"><BsSearch/></InputGroup.Text>
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
