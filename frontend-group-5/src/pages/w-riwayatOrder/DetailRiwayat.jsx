import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import paymentLogo from "./../../img/Image.png";
import arrowLogo from "./../../img/Thin (Stroke).png";

const DetailRiwayat = () => {
  const dummyData = [
    {
      bookingId: 11,
      bookingCode: "UVSWKL",
      departureAirport: "Semarang",
      departureDate: "2023-06-25",
      departureTime: "15:30:00",
      departureGate: "G01",
      arrivalAirport: "Banjarmasin",
      arrivalDate1: "2023-06-25",
      arrivalTime: "16:29:00",
      arrivalGate: "G02",
      longFlight1: "0 Hours 59 Minutes",
      flightClass: "Economy",
      airlineCode: "GA-345",
      customers: {
        customerId: 11,
        fullName: "Lucky Alma Aficionado Rigel",
        familyName: "Lucky Andreas",
        phoneNumber: "0877197823673",
        email: "luckyrigel@gmail.com",
      },
      passengers: [
        {
          passengerId: 13,
          title: "Mr.",
          fullName: "Lucky Alma Aficionado Rigel",
          familyName: "Lucky Andreas",
          dob: "2023-06-26",
          nationality: "Indonesia",
          identityNumber: 0,
          identityIssuingCountry: "Indonesia",
          expiredAt: "2023-06-26",
        },
        {
          passengerId: 14,
          title: "Mr.",
          fullName: "ajdhja",
          familyName: "jhadj",
          dob: "2023-06-26",
          nationality: "Indonesia",
          identityNumber: 0,
          identityIssuingCountry: "Indonesia",
          expiredAt: "2023-06-26",
        },
        {
          passengerId: 190,
          title: "Mr.",
          fullName: "ajdhja",
          familyName: "jhadj",
          dob: "2023-06-26",
          nationality: "Indonesia",
          identityNumber: 0,
          identityIssuingCountry: "Indonesia",
          expiredAt: "2023-06-26",
        },
      ],
    },

    {
      bookingId: 12,
      bookingCode: "UGHJT",
      departureAirport: "Jakarta",
      departureDate: "2023-06-25",
      departureTime: "15:30:00",
      departureGate: "G01",
      arrivalAirport: "Bali",
      arrivalDate1: "2023-06-25",
      arrivalTime: "16:29:00",
      arrivalGate: "G02",
      longFlight1: "0 Hours 59 Minutes",
      flightClass: "Economy",
      airlineCode: "GA-345",
      customers: {
        customerId: 11,
        fullName: "Lucky Alma Aficionado Rigel",
        familyName: "Lucky Andreas",
        phoneNumber: "0877197823673",
        email: "luckyrigel@gmail.com",
      },
      passengers: [
        {
          passengerId: 178,
          title: "Mr.",
          fullName: "Luihjh",
          familyName: "Lucky Andreas",
          dob: "2023-06-26",
          nationality: "Indonesia",
          identityNumber: 0,
          identityIssuingCountry: "Indonesia",
          expiredAt: "2023-06-26",
        },
        {
          passengerId: 189,
          title: "Mr.",
          fullName: "kjkhajs",
          familyName: "jhadj",
          dob: "2023-06-26",
          nationality: "Indonesia",
          identityNumber: 0,
          identityIssuingCountry: "Indonesia",
          expiredAt: "2023-06-26",
        },
      ],
    },
    // Add more objects here if needed
  ];

  const latestBookingCode = dummyData[dummyData.length - 1].bookingCode;
  const [showDetails, setShowDetails] = useState(
    dummyData.find((data) => data.bookingCode === latestBookingCode)
  );

  const handleOnClick = (bookingCode) => {
    const selectedData = dummyData.find(
      (data) => data.bookingCode === bookingCode
    );
    setShowDetails(selectedData);
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h5>Maret 2023</h5>
            {dummyData.map((data) => (
              <Card
                className="card_active mb-3"
                onClick={() => handleOnClick(data.bookingCode)}
                key={data.bookingCode}
              >
                <Card.Body>
                  <Col>
                    <p className="pb-3 card_tittle">Issued</p>
                    <Col className="card_body ">
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span className="fw-bold">
                            {data.departureAirport}
                          </span>
                          <span className="text-calender">
                            {data.departureDate}
                          </span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <span>{data.longFlight1}</span>
                          <img src={arrowLogo} alt="paymentLogo" />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="fw-bold">{data.arrivalAirport}</span>
                          <span className="text-calender">
                            {data.arrivalDate1}
                          </span>
                        </div>
                      </div>

                      <div className="my-2 d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span className="fw-bold">Booking Code:</span>
                          <span>{data.bookingCode}</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <span>Class:</span>
                          <span>{data.flightClass}</span>
                        </div>
                        <div className="">
                          <span className="fw-bold pe-1">IDR</span>
                          <span className="fw-bold">9.850.000</span>
                        </div>
                      </div>
                    </Col>
                  </Col>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {showDetails && (
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <p className="fw-bolder fs-4">Detail Pesanan </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="fw-bolder fs-5">
                      Booking Code :{" "}
                      <span style={{ color: "#7126B5" }}>
                        {showDetails.bookingCode}
                      </span>
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-6 fw-bolder">
                      {showDetails.departureTime}{" "}
                    </span>
                    <span className="text_paymentTitle2 ps-2 fw-bolder">
                      Keberangkatan
                    </span>
                  </div>

                  <div className="">
                    <span className="fs-6">{showDetails.departureDate}</span>
                    <p className="fs-6 border-bottom pb-3">
                      Soekarno Hatta - Terminal 1A Domestik
                    </p>
                  </div>

                  <div className="border-bottom">
                    <span className="fs-6 fw-bold ps-4">Jet Air - Economy</span>
                    <p className="fs-6 fw-bold ps-4">JT - 203</p>
                    <div className="d-flex flex-column">
                      <span className="fs-6 fw-bold ">
                        <img src={paymentLogo} alt="paymentLogo" /> Informasi:
                      </span>
                      {showDetails.passengers.map((passenger, index) => (
                        <div
                          key={passenger.passengerId}
                          className="fs-6 ps-4 d-flex flex-column"
                        >
                          <span style={{ color: "#7126B5" }}>
                            Penumpang {index + 1}: {passenger.fullName}
                          </span>
                          <div>ID: {passenger.passengerId}</div>
                        </div>
                      ))}
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
                    <div className="d-flex align-items-center justify-content-between fs-6 pt-2">
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
          )}
        </Row>
      </Container>
    </>
  );
};

export default DetailRiwayat;
