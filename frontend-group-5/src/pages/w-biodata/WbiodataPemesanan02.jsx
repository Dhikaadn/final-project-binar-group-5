import React, { useEffect, useState } from "react";
import "./styleBiodata.css";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import paymentLogo from "./../../img/Image.png";
import HideShowForm from "../../controller/HideShowForm";
import { NavbarBeranda } from "../../components/NavbarBeranda";

import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions/detail";
import { pesan } from "../../redux/actions/pemesanan";
import { NavbarCheckout2 } from "../../components/Navbar/NavbarCheckout";

const WbiodataPemesanan02 = () => {
  // const jumlahPengulangan = 2;
  // const detail = ["dewasa", "dewasa", "anak", "bayi"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { penumpang } = useSelector((state) => state.penumpang);
  const { token } = useSelector((state) => state.auth);
  // const { kelas } = useSelector((state) => state.kelas);
  const [bookingCode, setBookingCode] = useState("");
  const { detail } = useSelector((state) => state.detail);
  const { detailPenumpang } = useSelector((state) => state.penumpang);
  const { biodataPemesan, biodataPenumpang } = useSelector(
    (state) => state.formbiodata
  );

  useEffect(() => {
    dispatch(getDetail());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const generateBookingCode = () => {
    // Generate a random alphanumeric string
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const length = 6; // Length of the booking code

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setBookingCode(result);
  };

  useEffect(() => {
    generateBookingCode();
  }, []);

  const arrayBiodataPenumpang = Object.keys(biodataPenumpang).reduce(
    (result, key) => {
      const index = parseInt(key.slice(-1));
      const newKey = key.slice(0, -1);
      const value = biodataPenumpang[key];

      result[index] = {
        ...result[index],
        [newKey]: value,
        // passengerId: index,
      };

      return result;
    },
    []
  );

  console.log(arrayBiodataPenumpang);
  // console.log(kelas)

  // const dataBooking = {
  //   airlineCode: detail.airlineCode,
  //   flightClass: "Economy",
  //   customers: biodataPemesan,
  //   passengers: arrayBiodataPenumpang,
  //   departureAirport: detail.departureAirport,
  //   arrivalTime: detail.arrivalTime,
  //   flightCode: detail.airlineCode,
  // };
  

    // const airlineCode = detail.airlineCode;
    // const flightClass = "Economy";
    // const customers = biodataPemesan;
    // const passengers = arrayBiodataPenumpang;
    // const data = {airlineCode, flightClass, customers, passengers};
    // console.log(data);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json"
      },
    };
  const onBook = (e) => {
    e.preventDefault();
    const airlineCode = detail.airlineCode;
    const flightClass = detail.flightClass;
    const customers = biodataPemesan;
    const passengers = arrayBiodataPenumpang;
    const data = {airlineCode, flightClass, customers, passengers};
    console.log(data);
    dispatch(pesan(data, config, navigate));
  };

  return (
    <>
      <NavbarCheckout2/>

      <Container className="mt-3">
        <Row className="containerrr_form">
          <Col className="form_inputBiodata">
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
                    <Form.Label className="text_label">Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Harry"
                      value={biodataPemesan.fullName}
                      disabled
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text_label">
                      Nama Keluarga
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Potter"
                      value={biodataPemesan.familyName}
                      disabled
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text_label">
                      Nomor Telepon
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0812345678"
                      value={biodataPemesan.phoneNumber}
                      disabled
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text_label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Contoh: johndoe@gmail.com"
                      value={biodataPemesan.email}
                      disabled
                      required
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

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
                        value={biodataPenumpang[`title${index}`]}
                        disabled
                        
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
                        value={biodataPenumpang[`fullName${index}`]}
                        disabled
                        required
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Nama Keluarga
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Potter"
                        value={biodataPenumpang[`familyName${index}`]}
                        disabled
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
                        value={biodataPenumpang[`dob${index}`]}
                        disabled
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
                        value={biodataPenumpang[`nationality${index}`]}
                        disabled
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">KTP/Paspor</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        value={biodataPenumpang[`identityNumber${index}`]}
                        disabled
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
                        value={
                          biodataPenumpang[`identityIssuingCountry${index}`]
                        }
                        disabled
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text_label">
                        Berlaku Sampai
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="dd/mm/yyyy"
                        value={biodataPenumpang[`expiredAt${index}`]}
                        disabled
                        required
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              ))}
            </Card>

            <div className="button-wrapper position-relative">
              <Button className="my-5 w-100" disabled variant="secondary">
                Simpan
              </Button>
              <Button
                  className="w-100 mt-3"
                  style={{ background: "#FF0000", border: "none" }}
                  as={Link}
                  onClick={(e)=>onBook(e)}
                >
                  Lanjut Bayar
                </Button>
            </div>
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
                      <div className="d-flex align-items-center justify-content-between fs-6">
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
                <Button
                  className="w-100 mt-3"
                  style={{ background: "#FF0000", border: "none" }}
                  as={Link}
                  to={"/payment"}
                >
                  Lanjut Bayar
                </Button>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WbiodataPemesanan02;
