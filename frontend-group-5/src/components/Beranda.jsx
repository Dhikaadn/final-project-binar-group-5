import React, { useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LoadingBeranda } from "./LoadingBeranda";
import { TiketFinished } from "./TiketFinished";
import { NoneSearch } from "./NoneSearch";
import { ReadyTicket } from "./ReadyTicket";
import { useDispatch, useSelector } from "react-redux";
import { getListPenerbangan } from "../redux/actions/search";
import { Penumpang } from "../redux/actions/penumpang";
import { useEffect } from "react";
import { dataNew } from "../redux/actions/kelas";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export const Beranda = () => {
  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useSelector -> to access the global state (redux)
  const { listPenerbangan } = useSelector((state) => state.search);
  const { penumpang } = useSelector((state) => state.penumpang);
  const { dataAwal } = useSelector((state) => state.kelas);

  const [futureDates, setFutureDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    dispatch(getListPenerbangan(), Penumpang());
  }, [dispatch]);

  const countPenumpang = penumpang.anak + penumpang.dewasa + penumpang.bayi;

  useEffect(() => {
    const currentDate = dataAwal.formattedDate
      ? new Date(dataAwal.formattedDate)
      : new Date();

    const dates = [];
    for (let i = 0; i < 6; i++) {
      const futureDate = `${currentDate.toISOString().split("T")[0]}`;
      dates.push(futureDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setFutureDates(dates);
    setSelectedDate(dates[0]); // Set nilai awal selectedDate
  }, [dataAwal.formattedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  // console.log(data);

  useEffect(() => {
    const buttonText1 = dataAwal.buttonText1;
    const buttonText2 = dataAwal.buttonText2;
    const seatClass = dataAwal.seatClass;
    const formattedDate = selectedDate;
    const data = { buttonText1, buttonText2, seatClass, formattedDate };
    console.log(data);
    dispatch(dataNew(data));
    dispatch(getListPenerbangan(data, navigate));
  }, [selectedDate]);

  // console.log(selectedDate);

  return (
    <>
      <NavbarBeranda />
      <Container className=" mb-3 boxBtnAcordi">
        <Row className="mb-4 ">
          <div className="title_pesanan">
            <p className="fw-bold mt-5 fs-4">Pilih Penerbangan</p>
          </div>
          <Col
            className="d-flex justify-content-between align-items-center btn-back"
            xs={12}
            md={9}
          >
            <div className="textBtn_back w-100">
              {listPenerbangan.length > 0 ? (
                <Button
                  style={{ background: "none", border: "none" }}
                  as={Link}
                  to="/"
                >
                  <BiArrowBack className="me-3 fs-4" />{" "}
                  {listPenerbangan[0].departureCity} {">"}{" "}
                  {listPenerbangan[0].arrivalCity} - {countPenumpang} Penumpang
                  - {listPenerbangan[0].airlineClass}
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </Col>
          <Col xs={12} md={3}>
            <Button
              as={Link}
              to="/"
              style={{
                background: "#73CA5C",
                border: "none",
                height: "48px",
                borderRadius: "12px",
              }}
              className="w-100 d-flex align-items-center justify-content-center"
            >
              Ubah Pencarian
            </Button>
          </Col>
        </Row>

        <div className="container-hari-center mb-4">
          {futureDates.map((date, index) => (
            <div className="hari" key={index}>
              <Button
                className={`bt-non-hari ${
                  selectedDate === date ? "active" : ""
                }`}
                onClick={() => handleDateSelect(date)}
              >
                {date}
              </Button>
            </div>
          ))}
        </div>
      </Container>

      {listPenerbangan.length > 0 ? <ReadyTicket /> : <NoneSearch />}
    </>
  );
};

{
  /* <h4 className="fw-bold mb-4">Pilih Penerbangan</h4>
        <div className="container-hari-top">
            {listPenerbangan.length>0?
            <Button className="bt-detail me-3">
            <BiArrowBack className="me-3" />
            {listPenerbangan[0].departureCity} {">"} {listPenerbangan[0].arrivalCity} - {countPenumpang}{" "}
            Penumpang - {listPenerbangan[0].airlineClass}
          </Button>
            :<div></div>}
          <Link to="/" style={{textDecoration:"none"}}>
            <Button className="bt-pencarian">Ubah Pencarian</Button>
          </Link>
        </div> */
}
