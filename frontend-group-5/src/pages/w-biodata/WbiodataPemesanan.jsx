import React, { useState, useEffect } from "react";
import "./styleBiodata.css";
import {
  Accordion,
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import paymentLogo from "./../../img/Image.png";
import HideShowForm from "../../controller/HideShowForm";
import { NavbarBeranda } from "../../components/NavbarBeranda";
import { useSelector } from "react-redux";

const WbiodataPemesanan = () => {
  // const jumlahPengulangan = 2;
  // const detail = ["dewasa", "dewasa", "anak", "bayi"];
  const { detailPenumpang } = useSelector((state) => state.penumpang);

  const [dataPemesan, setDataPemesan] = useState({
    name: "",
    nameKeluarga: "",
    noHp: "",
    email: "",
  });
  const [formData, setFormData] = useState({});
  const [showmodal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleChange = (event) => {
    setDataPemesan({
      ...dataPemesan,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const newFormData = {};

    detailPenumpang.map((item, index) => {
      // const itemIndex = index + 1; // Anda dapat menggunakan `itemIndex` dalam penamaan properti

      newFormData[`title${index}`] = "Mr.";
      newFormData[`name${index}`] = "";
      newFormData[`namaKeluarga${index}`] = "";
      newFormData[`tanggalLahir${index}`] = "";
      newFormData[`negara${index}`] = "";
      newFormData[`identitas${index}`] = "";
      newFormData[`penerbit${index}`] = "";
      newFormData[`masaAktif${index}`] = "";
    });

    // newFormData
    // {username1: "", phoneNumber1: "", username2: "", phoneNumber2: ""}

    // setLoopedItems(totalItems);
    setFormData(newFormData);
  }, [detailPenumpang]);

  console.log(formData);
  console.log(dataPemesan);

  return (
    <>
      {/* ===== NAVBAR ====== */}
      <NavbarBeranda />

      <Container className="mt-2">
        <Row className="containerrr_form">
          <Col className="form_inputBiodata">
            <Accordion>
              <Card>
                <Card.Body>
                  <Card.Title className="pb-3 fw-bold">
                    Isi Data Pemesan
                  </Card.Title>
                  <Card.Text className="title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4">
                    Data Diri Pemesan
                  </Card.Text>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Harry"
                        id="name"
                        name="name"
                        value={dataPemesan["name"]}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between">
                      <Form.Label>Punya Nama Keluarga?</Form.Label>
                      <HideShowForm eventKey="0" onClick={handleSwitch} />
                    </Form.Group>

                    <Accordion.Collapse eventKey="0">
                      <Form.Group className="mb-3">
                        <Form.Label className="text_label">
                          Nama Keluarga
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Potter"
                          id="nameKeluarga"
                          name="nameKeluarga"
                          value={dataPemesan["nameKeluarga"]}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Accordion.Collapse>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Nomor Telepon
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0812345678"
                        id="noHp"
                        name="noHp"
                        value={dataPemesan["noHp"]}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Contoh: johndoe@gmail.com"
                        id="email"
                        name="email"
                        value={dataPemesan["email"]}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Accordion>

            <Card className="mt-4">
              <Card.Title className="m-4 fw-bold">
                Isi Data Penumpang
              </Card.Title>
              {detailPenumpang.map((item, index) => (
                <Card.Body key={index}>
                  <Card.Text className="title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4">
                    Data Diri Penumpang {index + 1} - {item}
                  </Card.Text>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">Title</Form.Label>
                      <Form.Select
                        key={index}
                        id={`title${index}`}
                        name={`title${index}`}
                        value={formData[`title${index}`]}
                        onChange={handleInputChange}
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="text_label"
                        aria-label="Nama Lengkap"
                      >
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Harry"
                        id={`name${index}`}
                        name={`name${index}`}
                        value={formData[`name${index}`]}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </Form.Group>

                    {/* <Form.Group className="mb-3 d-flex justify-content-between">
                          <Form.Label>Punya Nama Keluarga?</Form.Label>
                          <HideShowForm
                            eventKey={item.toString()}
                            onClick={handleSwitch}
                          />
                        </Form.Group> */}

                    {/* <Accordion.Collapse eventKey={item.toString()}> */}
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Nama Keluarga
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Potter"
                        id={`namaKeluarga${index}`}
                        name={`namaKeluarga${index}`}
                        value={formData[`namaKeluarga${index}`]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    {/* </Accordion.Collapse> */}
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Tanggal Lahir
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="dd/mm/yyyy"
                        id={`tanggalLahir${index}`}
                        name={`tanggalLahir${index}`}
                        value={formData[`tanggalLahir${index}`]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Kewarganegaraan
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Indonesia"
                        id={`negara${index}`}
                        name={`negara${index}`}
                        value={formData[`negara${index}`]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">KTP/Paspor</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        id={`identitas${index}`}
                        name={`identitas${index}`}
                        value={formData[`identitas${index}`]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Negara penerbit
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        id={`penerbit${index}`}
                        name={`penerbit${index}`}
                        value={formData[`penerbit${index}`]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Berlaku Sampai
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="dd/mm/yyyy"
                        id={`masaAktif${index}`}
                        name={`masaAktif${index}`}
                        value={formData[`masaAktif${index}`]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              ))}
            </Card>

            <div className="button-wrapper position-relative">
              <Button
                className="my-5 w-100"
                as={Link}
                to={"/biodata_pemesanan2"}
                style={{ background: "#7126B5", border: "none" }}
              >
                Simpan
              </Button>
              <Button className="my-5 w-100" onClick={handleShowModal}>
                Simpan Modal
              </Button>
            </div>

            <Modal
              show={showmodal}
              onHide={handleCloseModal}
              backdrop="static"
              keyboard={false}
              className="pt-5"
            >
              <div className="modal_content">
                <span className="ps-2">Anda Harus Login Terlebih Dahulu!</span>
                <CloseButton
                  onClick={handleCloseModal}
                  variant="white"
                  aria-label="close"
                  className="fs-6 ms-3"
                />
              </div>
            </Modal>
          </Col>

          <Col>
            <Container>
              <Col className="form_Detail">
                <Card className="border-0 ">
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <p className="fw-bolder fs-4">Detail Penerbangan </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fs-6 fw-bolder">07:00 </span>
                      <span className="text_paymentTitle2 ps-2 fw-bolder">
                        Keberangkatan
                      </span>
                    </div>

                    <div className="">
                      <span className="fs-6">3 Maret 2023</span>
                      <p className="fs-6 border-bottom pb-3">
                        Soekarno Hatta - Terminal 1A Domestik
                      </p>
                    </div>

                    <div className="border-bottom">
                      <span className="fs-6 fw-bold ps-4">
                        Jet Air - Economy
                      </span>
                      <p className="fs-6 fw-bold ps-4">JT - 203</p>
                      <div className="d-flex flex-column">
                        <span className="fs-6 fw-bold ">
                          <img src={paymentLogo} alt="paymentLogo" /> Informasi:
                        </span>
                        <span className="fs-6 ps-4 pt-1">Baggage 20 kg</span>
                        <span className="fs-6 ps-4">Cabin baggage 7 kg</span>
                        <span className="fs-6 pb-2 ps-4">
                          In Flight Entertainment
                        </span>
                      </div>
                    </div>

                    <div className="border-bottom">
                      <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                        <span className=" fw-bolder">11:00 </span>
                        <span className="text_paymentTitle2 ps-2 fw-bolder ">
                          Kedatangan
                        </span>
                      </div>
                      <span className="fs-6">3 Maret 2023</span>
                      <p className="fs-6 ">Melbourne International Airport</p>
                    </div>

                    <div className="pt-3 border-bottom">
                      <span className="pt-3 fw-bolder">Rincian Harga</span>
                      <div className="d-flex align-items-center justify-content-between fs-6">
                        <span className=" ">2 Adults </span>
                        <span className=" ">IDR 9.550.000</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between fs-6">
                        <span className=" ">1 Baby </span>
                        <span className=" ">IDR 0</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between fs-6 pb-3">
                        <span className=" ">Tax </span>
                        <span className="  ">IDR 300.000</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                      <span className=" fw-bolder">Total </span>
                      <span className="text_paymentTitle ps-2 fw-bolder fs-5 ">
                        IDR 9.850.000
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WbiodataPemesanan;
