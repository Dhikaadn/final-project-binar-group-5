import React from "react";
import Image from "../img/img_banner.svg";

function Banner() {
  return (
    <div>
      <div className="rectangle-banner"></div>
      <div className="container">
        <div className="container-banner">
          <img src={Image} className="card-img" alt="Card" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
