import React, { useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Banner from "./Banner";
import ListCard from "./ListCard";
import PilihPenerbangan from "./PilihPenerbangan";

import IconSearch from "../img/fi_search_putih.svg";

const HomePage = () => {
  const [activeButton, setActiveButton] = useState("Semua");

  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  return (
    <div className="Home">
      <NavbarBeranda />
      <Banner />
      <div className="container w-75">
        {/* pilih penerbangan */}
        <PilihPenerbangan />

        {/* destination favorit */}
        <div className="card border-light">
          <div className="card-body">
            <div className="card-title mb-3">
              <h5>Destinasi Favorit</h5>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-primary mx-2 my-1"
                onClick={() => handleButtonClick("Semua")}
                style={{
                  backgroundColor:
                    activeButton === "Semua" ? "#7126B5" : "#E2D4F0",
                  borderWidth: 0,
                }}
              >
                <img
                  src={IconSearch}
                  alt="Icon"
                  style={{ marginRight: "5px" }}
                />
                Semua
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-1"
                onClick={() => handleButtonClick("Asia")}
                style={{
                  backgroundColor:
                    activeButton === "Asia" ? "#7126B5" : "#E2D4F0",
                  borderWidth: 0,
                }}
              >
                <img
                  src={IconSearch}
                  alt="Icon"
                  style={{ marginRight: "5px" }}
                />
                Asia
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-1"
                onClick={() => handleButtonClick("Amerika")}
                style={{
                  backgroundColor:
                    activeButton === "Amerika" ? "#7126B5" : "#E2D4F0",
                  borderWidth: 0,
                }}
              >
                <img
                  src={IconSearch}
                  alt="Icon"
                  style={{ marginRight: "5px" }}
                />
                Amerika
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-1"
                onClick={() => handleButtonClick("Australia")}
                style={{
                  backgroundColor:
                    activeButton === "Australia" ? "#7126B5" : "#E2D4F0",
                  borderWidth: 0,
                }}
              >
                <img
                  src={IconSearch}
                  alt="Icon"
                  style={{ marginRight: "5px" }}
                />
                Australia
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-1"
                onClick={() => handleButtonClick("Eropa")}
                style={{
                  backgroundColor:
                    activeButton === "Eropa" ? "#7126B5" : "#E2D4F0",
                  borderWidth: 0,
                }}
              >
                <img
                  src={IconSearch}
                  alt="Icon"
                  style={{ marginRight: "5px" }}
                />
                Eropa
              </button>
            </div>
          </div>
        </div>

        {/* list */}
        <ListCard category={activeButton} />
      </div>
    </div>
  );
};

export default HomePage;
