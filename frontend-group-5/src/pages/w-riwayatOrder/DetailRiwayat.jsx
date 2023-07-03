import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import paymentLogo from "./../../img/Image.png";
import arrowLogo from "./../../img/Thin (Stroke).png";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DetailRiwayat = ({ searchResults }) => {
  const { listRiwayat } = useSelector((state) => state.riwayat) || [];

  const [showDetails, setShowDetails] = useState();
  const [bookingCode, setBookingCode] = useState("");

  useEffect(() => {
    const latestBookingCode = searchResults[0]?.bookingCode; // Mengambil booking code terlama
    if (latestBookingCode) {
      const selectedData = searchResults.find(
        (data) => data.bookingCode === latestBookingCode
      );
      setShowDetails(selectedData);
      setBookingCode(latestBookingCode); // Menggunakan booking code terlama
    }
  }, [searchResults]);

  // console.log(searchResults);

  const handleOnClick = (bookingCode) => {
    const selectedData = listRiwayat.find(
      (data) => data.bookingCode === bookingCode
    );
    setShowDetails(selectedData);
    setBookingCode(selectedData.bookingCode);
  };

  const handlePrintTicket = () => {
    const url = `https://backend-binar-final-project-production.up.railway.app/api/v1/invoice/${bookingCode}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="balik">
            {searchResults.map((data) => (
              <Card
                className="card_active mb-3"
                onClick={() => handleOnClick(data.bookingCode)}
                key={data.bookingCode}
              >
                <Card.Body>
                  <Col>
                    {data.statusPayment === "ISSUED" && (
                      <p className="pb-3 card_tittle">{data.statusPayment}</p>
                    )}
                    {data.statusPayment === "UNPAID" && (
                      <p className="pb-3 card_unpaid">{data.statusPayment}</p>
                    )}
                    {data.statusPayment === "CANCELED" && (
                      <p className="pb-3 card_canceled">{data.statusPayment}</p>
                    )}
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
                          <span className="fw-bold">{data.totalPrice}</span>
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
              <Card
                className="border-0"
                onClick={() => handleOnClick(showDetails.bookingCode)}
                key={showDetails.bookingCode}
              >
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold fs-5">Detail Pesanan </p>
                    <span>
                      {showDetails.statusPayment === "ISSUED" && (
                        <p className="pb-3 card_tittle">
                          {showDetails.statusPayment}
                        </p>
                      )}
                      {showDetails.statusPayment === "UNPAID" && (
                        <p className="pb-3 card_unpaid">
                          {showDetails.statusPayment}
                        </p>
                      )}
                      {showDetails.statusPayment === "CANCELED" && (
                        <p className="pb-3 card_canceled">
                          {showDetails.statusPayment}
                        </p>
                      )}
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="fw-bold fs-5">
                      Booking Code :{" "}
                      <span style={{ color: "#7126B5" }}>
                        {showDetails.bookingCode}
                      </span>
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-6 fw-bold">
                      {showDetails.departureTime}{" "}
                    </span>
                    <span className="text_paymentTitle2 ps-2 fw-bolder">
                      Keberangkatan
                    </span>
                  </div>

                  <div className="">
                    <span className="fs-6">{showDetails.departureDate}</span>
                    <p className="fs-6 border-bottom pb-3">
                      {showDetails.departureAirport} - Gate{" "}
                      {showDetails.departureGate}
                    </p>
                  </div>

                  <div className="border-bottom">
                    <span className="fs-6 fw-bold ps-4">
                      {showDetails.airlineName}-{showDetails.flightClass}
                    </span>
                    <p className="fs-6 fw-bold ps-4">
                      {showDetails.airlineCode}
                    </p>
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
                      <span className=" fw-bolder">
                        {showDetails.arrivalTime}{" "}
                      </span>
                      <span className="text_paymentTitle2 ps-2 fw-bolder ">
                        Kedatangan
                      </span>
                    </div>
                    <span className="fs-6">{showDetails.arrivalDate1}</span>
                    <p className="fs-6 ">
                      {showDetails.arrivalAirport} - Gate{" "}
                      {showDetails.arrivalGate}
                    </p>
                  </div>
                  <div className="pt-3 border-bottom">
                    <span className="pt-3 fw-bolder">Rincian Harga</span>
                    {showDetails.adultPassenger !== 0 && (
                      <div className="d-flex align-items-center justify-content-between fs-6 pt-2">
                        <span>{showDetails.adultPassenger} Adults </span>
                        <span>IDR {showDetails.adultPrice}</span>
                      </div>
                    )}
                    {showDetails.childPassenger !== 0 && (
                      <div className="d-flex align-items-center justify-content-between fs-6">
                        <span>{showDetails.childPassenger} Baby </span>
                        <span>IDR {showDetails.childPrice}</span>
                      </div>
                    )}
                    {showDetails.babyPassenger !== 0 && (
                      <div className="d-flex align-items-center justify-content-between fs-6">
                        <span>{showDetails.babyPassenger} Baby </span>
                        <span>IDR {showDetails.babyPrice}</span>
                      </div>
                    )}
                    <div className="d-flex align-items-center justify-content-between fs-6 pb-3">
                      <span>Tax </span>
                      <span>IDR 300.000</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt-3 fs-6">
                    <span className=" fw-bolder">Total </span>
                    <span className="text_paymentTitle ps-2 fw-bolder fs-5 ">
                      IDR {showDetails.totalPrice}
                    </span>
                  </div>
                </Card.Body>

                {showDetails.statusPayment === "ISSUED" && (
                  <Button
                    className="py-2 mb-2"
                    style={{ backgroundColor: "red", border: 0 }}
                    as={Link}
                    to="/payment"
                  >
                    Cetak Tiket
                  </Button>
                )}
                {showDetails.statusPayment === "UNPAID" && (
                  <Button
                    className="py-2 mb-2"
                    style={{ backgroundColor: "#7126B5", border: 0 }}
                    onClick={handlePrintTicket}
                  >
                    Cetak Tiket
                  </Button>
                )}
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default DetailRiwayat;
