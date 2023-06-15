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
import { Link } from "react-router-dom";
import paymentLogo from "./../../img/Image.png";
import HideShowForm from "../../controller/HideShowForm";
import { NavbarBeranda } from "../../components/NavbarBeranda";

const WbiodataPemesanan02 = ({ jumlahPengulangan }) => {
  const [dataPemesan, setDataPemesan] = useState({
    name: "",
    nameKeluarga: "",
    noHp: "",
    email: "",
  });
  const [formData, setFormData] = useState(null);
  const [loopedItems, setLoopedItems] = useState(2);

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
    const totalItems = Array.from(
      { length: jumlahPengulangan },
      (_, index) => index + 1
    );

    const newFormData = {};

    totalItems.map((item) => {
      newFormData[`title${item}`] = "Mr.";
      newFormData[`name${item}`] = "";
      newFormData[`namaKeluarga${item}`] = "";
      newFormData[`tanggalLahir${item}`] = "";
      newFormData[`negara${item}`] = "";
      newFormData[`identitas${item}`] = "";
      newFormData[`penerbit${item}`] = "";
      newFormData[`masaAktif${item}`] = "";
    });

    // newFormData
    // {username1: "", phoneNumber1: "", username2: "", phoneNumber2: ""}

    setLoopedItems(totalItems);
    setFormData(newFormData);
  }, [jumlahPengulangan]);

  console.log(formData);
  console.log(dataPemesan);

  return (
    <>
      <NavbarBeranda />

      <Container className="mt-3">
        <Row className="containerrr_form">
          <Col>
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
              {loopedItems.length > 0 &&
                loopedItems.map((item) => (
                  <Card.Body key={item}>
                    <Card.Text className="title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4">
                      Data Diri Penumpang {item} - Adult
                    </Card.Text>

                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label className="text_label">Title</Form.Label>
                        <Form.Select
                          key={item}
                          id={`title${item}`}
                          name={`title${item}`}
                          value={formData[`title${item}`]}
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
                          id={`name${item}`}
                          name={`name${item}`}
                          value={formData[`name${item}`]}
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
                          id={`namaKeluarga${item}`}
                          name={`namaKeluarga${item}`}
                          value={formData[`namaKeluarga${item}`]}
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
                          id={`tanggalLahir${item}`}
                          name={`tanggalLahir${item}`}
                          value={formData[`tanggalLahir${item}`]}
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
                          id={`negara${item}`}
                          name={`negara${item}`}
                          value={formData[`negara${item}`]}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text_label">
                          KTP/Paspor
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          id={`identitas${item}`}
                          name={`identitas${item}`}
                          value={formData[`identitas${item}`]}
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
                          id={`penerbit${item}`}
                          name={`penerbit${item}`}
                          value={formData[`penerbit${item}`]}
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
                          id={`masaAktif${item}`}
                          name={`masaAktif${item}`}
                          value={formData[`masaAktif${item}`]}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                ))}
            </Card>

            {/* <Accordion >
                        <Card className='mt-4'>
                            <Card.Body>
                                <Card.Title className='pb-3 fw-bold'>Isi Data Penumpang</Card.Title>
                                <Card.Text className='title_card d-flex justify-content-start align-items-center rounded-top-4 ps-4'>
                                    Data Diri Penumpang 1 - Adult
                                </Card.Text>
                                
                                <Form>
                                    <Form.Group className="mb-3" >
                                        <Form.Label className='text_label'>Title</Form.Label>
                                        <Form.Select id='title' >
                                            <option >Mr.</option>
                                            <option value="1">Mrs.</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label className='text_label' aria-label='Nama Lengkap'>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" placeholder="Harry" id='name' autoComplete='off'/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 d-flex justify-content-between" >
                                        <Form.Label >Punya Nama Keluarga?</Form.Label>                                        
                                        <HideShowForm eventKey="2" onClick={handleSwitch}/>
                                    </Form.Group>

                                    <Accordion.Collapse eventKey="2">
                                        <Form>
                                            <Form.Group className="mb-3" >
                                                <Form.Label className='text_label'>Nama Keluarga</Form.Label>
                                                <Form.Control type="text" placeholder="Potter" id='nameKeluarga'/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label className='text_label'>Tanggal Lahir</Form.Label>
                                                <Form.Control type="date" placeholder="dd/mm/yyyy" id='ttl'/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label className='text_label'>Kewarganegaraan</Form.Label>
                                                <Form.Control type="text" placeholder="Indonesia" id='negara'/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label className='text_label'>KTP/Paspor</Form.Label>
                                                <Form.Control type="text" placeholder="" id='paspor'/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label className='text_label'>Negara penerbit</Form.Label>
                                                <Form.Control type="text" placeholder="" id='penerbit'/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label className='text_label'>Berlaku Sampai</Form.Label>
                                                <Form.Control type="date" placeholder="dd/mm/yyyy" id='expired'/>
                                            </Form.Group>
                                        </Form>
                                    </Accordion.Collapse>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Accordion> */}

            <div className="button-wrapper position-relative">
              <Button className="my-5 w-100" disabled variant="secondary">
                Simpan
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