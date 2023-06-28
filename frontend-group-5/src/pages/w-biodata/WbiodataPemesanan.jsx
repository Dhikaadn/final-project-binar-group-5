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
import { useNavigate } from "react-router-dom";
import paymentLogo from "./../../img/Image.png";
import HideShowForm from "../../controller/HideShowForm";
import { NavbarCheckout } from "../../components/Navbar/NavbarCheckout";
import { useDispatch, useSelector } from "react-redux";
import {
  BiodataPemesan,
  BiodataPenumpang,
} from "../../redux/actions/formbiodata";

import { getDetail } from "../../redux/actions/detail";

const WbiodataPemesanan = () => {
  // const jumlahPengulangan = 2;
  // const detail = ["dewasa", "dewasa", "anak", "bayi"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const { detailPenumpang } = useSelector((state) => state.penumpang);
  const { penumpang } = useSelector((state) => state.penumpang);
  const { detail } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail());
  }, [dispatch]);

  const [dataPemesan, setDataPemesan] = useState({
    fullName: '',
    familyName: '',
    phoneNumber: '',
    email: '',
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

  const handleSubmit = () => {
    dispatch(BiodataPemesan(dataPemesan, navigate));
    dispatch(BiodataPenumpang(formData, navigate));
  };

  useEffect(() => {
    const newFormData = {};

    detailPenumpang.map((item, index) => {
      // const itemIndex = index + 1; // Anda dapat menggunakan `itemIndex` dalam penamaan properti

      newFormData[`title${index}`] = "Mr.";
      newFormData[`fullName${index}`] = '';
      newFormData[`familyName${index}`] = '';
      newFormData[`dob${index}`] = '';
      newFormData[`nationality${index}`] = '';
      newFormData[`identityNumber${index}`] = '';
      newFormData[`identityIssuingCountry${index}`] = '';
      newFormData[`expiredAt${index}`] = '';
    });

    // newFormData
    // {username1: "", phoneNumber1: "", username2: "", phoneNumber2: ""}

    // setLoopedItems(totalItems);
    setFormData(newFormData);
  }, [detailPenumpang]);

  useEffect(() => {
    const isDataPemesanValid =
      dataPemesan.fullName !== "" &&
      dataPemesan.phoneNumber !== "" &&
      dataPemesan.email !== "";

    const isFormDataValid = Object.values(formData).every(
      (value) => value !== ""
    );

    setIsFormValid(isDataPemesanValid && isFormDataValid);
  }, [dataPemesan, formData]);

  console.log(formData);
  console.log(dataPemesan);

  return (
    <>
      {/* ===== NAVBAR ====== */}
      <NavbarCheckout />

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
                        id="fullName"
                        name="fullName"
                        value={dataPemesan["fullName"]}
                        onChange={handleChange}
                        autoComplete="off"
                        required
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
                          id="familyName"
                          name="familyName"
                          value={dataPemesan["familyName"]}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Accordion.Collapse>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Nomor Telepon
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="0812345678"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={dataPemesan["phoneNumber"]}
                        onChange={handleChange}
                        required
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
                        required
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
                        required
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
                        id={`fullName${index}`}
                        name={`fullName${index}`}
                        value={formData[`fullName${index}`]}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required                     
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
                        id={`familyName${index}`}
                        name={`familyName${index}`}
                        value={formData[`familyName${index}`]}
                        onChange={handleInputChange}  
                        required                    
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
                        id={`dob${index}`}
                        name={`dob${index}`}
                        value={formData[`dob${index}`]}
                        onChange={handleInputChange}
                        required                     
                         />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Kewarganegaraan
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Indonesia"
                        id={`nationality${index}`}
                        name={`nationality${index}`}
                        value={formData[`nationality${index}`]}
                        onChange={handleInputChange}
                        required  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">KTP/Paspor</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        id={`identityNumber${index}`}
                        name={`identityNumber${index}`}
                        value={formData[`identityNumber${index}`]}
                        onChange={handleInputChange}
                        required                   
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Negara penerbit
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        id={`identityIssuingCountry${index}`}
                        name={`identityIssuingCountry${index}`}
                        value={formData[`identityIssuingCountry${index}`]}
                        onChange={handleInputChange}
                        required                    />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Berlaku Sampai
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="dd/mm/yyyy"
                        id={`expiredAt${index}`}
                        name={`expiredAt${index}`}
                        value={formData[`expiredAt${index}`]}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              ))}
            </Card>

            <div className="button-wrapper position-relative">
              <Button
                type = "submit"
                className="my-5 w-100"
                onClick={() => handleSubmit()}
                style={{ background: "#7126B5", border: "none" }}
                disabled={!isFormValid}
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
                      <span className="fs-6 fw-bolder">
                        {detail.departureTime}
                      </span>
                      <span className="text_paymentTitle2 ps-2 fw-bolder">
                        Keberangkatan
                      </span>
                    </div>

                    <div className="">
                      <span className="fs-6">{detail.departureDate}</span>
                      <p className="fs-6 border-bottom pb-3">
                        {detail.departureAirport}
                      </p>
                    </div>

                    <div className="border-bottom">
                      <span className="fs-6 fw-bold ps-4">
                        {detail.airlineName}
                      </span>
                      <p className="fs-6 fw-bold ps-4">{detail.airlineCode}</p>
                      <div className="d-flex flex-column">
                        <span className="fs-6 fw-bold ">
                          <img src={paymentLogo} alt="paymentLogo" /> Informasi:
                        </span>
                        <span className="fs-6 ps-4 pt-1">
                          Baggage {detail.checkedBaggage} kg
                        </span>
                        <span className="fs-6 ps-4">
                          Cabin baggage {detail.cabinBaggage} kg
                        </span>
                        <span className="fs-6 pb-2 ps-4">
                          In Flight Entertainment
                        </span>
                      </div>
                    </div>

                    <div className="border-bottom">
                      <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                        <span className=" fw-bolder">{detail.arrivalTime}</span>
                        <span className="text_paymentTitle2 ps-2 fw-bolder ">
                          Kedatangan
                        </span>
                      </div>
                      <span className="fs-6">{detail.arrivalDate}</span>
                      <p className="fs-6 ">{detail.arrivalAirport}</p>
                    </div>

                    <div className="pt-3 border-bottom">
                      <span className="pt-3 fw-bolder">Rincian Harga</span>
                      {/* <div className="d-flex align-items-center justify-content-between fs-6">
                        <span className=" ">{penumpang.dewasa} Adults </span>
                        <span className=" ">IDR {detail.adultPrice}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between fs-6">
                        <span className=" ">{penumpang.anak} Children </span>
                        <span className=" ">IDR {detail.childPrice}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between fs-6 pb-3">
                        <span className=" ">Tax </span>
                        <span className="  ">IDR 300.000</span>
                      </div> */}

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
                      <span className=" fw-bolder">Total </span>
                      <span className="text_paymentTitle ps-2 fw-bolder fs-5 ">
                        IDR {detail.totalPrice}
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
