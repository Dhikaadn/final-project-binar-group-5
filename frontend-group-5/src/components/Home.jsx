import React, { useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Banner from "./Banner";
import ListCard from "./ListCard";
import PilihPenerbangan from "./PilihPenerbangan";
import IconSearch from "../img/fi_search_putih.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const HomePage = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Semua");

  const { penumpang } = useSelector((state) => state.penumpang);


  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  return (
    <>
      <NavbarBeranda />
      <Banner />
      <Container className="w-75">
        {/* pilih penerbangan */}
        <PilihPenerbangan />

        {/* destination favorit */}
        <Container>
          <Row>
            <h4 className="fw-bold">Destinasi Favorit</h4>
            <Col>
              <Button
                className="py-2 me-3 my-1 btn_destinasi"
                onClick={() => handleButtonClick("Semua")}
                style={{
                  backgroundColor:
                    activeButton === "Semua" ? "#7126B5" : "#E2D4F0",
                  color: activeButton === "Semua" ? "#E2D4F0" : "#000",
                  border: "none",
                }}
              >
                <BiSearch className="fs-5 me-2" />
                Semua
              </Button>
              <Button
                className="py-2 me-3 my-1 btn_destinasi"
                onClick={() => handleButtonClick("Asia")}
                style={{
                  backgroundColor:
                    activeButton === "Asia" ? "#7126B5" : "#E2D4F0",
                  color: activeButton === "Asia" ? "#E2D4F0" : "#000",
                  border: "none",
                }}
              >
                <BiSearch className="fs-5 me-2" />
                Asia
              </Button>
              <Button
                className="py-2 me-3 my-1 btn_destinasi"
                onClick={() => handleButtonClick("Amerika")}
                style={{
                  backgroundColor:
                    activeButton === "Amerika" ? "#7126B5" : "#E2D4F0",
                  color: activeButton === "Amerika" ? "#E2D4F0" : "#000",
                  border: "none",
                }}
              >
                <BiSearch className="fs-5 me-2" />
                Amerika
              </Button>
              <Button
                className="py-2 me-3 my-1 btn_destinasi"
                onClick={() => handleButtonClick("Australia")}
                style={{
                  backgroundColor:
                    activeButton === "Australia" ? "#7126B5" : "#E2D4F0",
                  color: activeButton === "Australia" ? "#E2D4F0" : "#000",
                  border: "none",
                }}
              >
                <BiSearch className="fs-5 me-2" />
                Australia
              </Button>
              <Button
                className="py-2 me-3 my-1 btn_destinasi"
                onClick={() => handleButtonClick("Eropa")}
                style={{
                  backgroundColor:
                    activeButton === "Eropa" ? "#7126B5" : "#E2D4F0",
                  color: activeButton === "Eropa" ? "#E2D4F0" : "#000",
                  border: "none",
                }}
              >
                <BiSearch className="fs-5 me-2" />
                <span>Eropa</span>
              </Button>
            </Col>
          </Row>

          {/* list */}
          <ListCard category={activeButton} />
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
