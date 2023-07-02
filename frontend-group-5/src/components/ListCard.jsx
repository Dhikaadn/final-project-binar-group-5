import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import ImgDestination from "../img/img_destinasi.svg";

function ListCard({ category }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/v1/schedule/favorite-destination`
        );
        const data = response?.data?.data;
        // Filter hasil pencarian berdasarkan searchText
        let filteredResults = [];

        if (category === "Semua") {
          // Menampilkan semua hasil jika tombol "Semua" aktif
          filteredResults = data;
        } else {
          // Filter hasil berdasarkan kategori yang dipilih
          filteredResults = data.filter(
            (result) => result.category === category
          );
        }

        setSearchResults(filteredResults);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Container className=" p-2">
      <div className="list_container">
        {searchResults.map((result, index) => (
          <div
            className="m-2"
            style={{ display: "flex", justifyItems: "flex-start" }}
            key={index}
          >
            <Card style={{ width: "180px" }}>
              <img
                src={result.image}
                // src={ImgDestination}
                className="card-img-top p-2"
                style={{ height: "150px", borderRadius: "10px" }}
              />
              <div className="p-2 d-flex flex-column">
                <h5 style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {result.rute}
                </h5>
                <span className="card-maskapai pb-2">{result.airline}</span>
                <span className="card-subtitle pb-2"> {result.date} </span>
                <p className="card-subtitle ">
                  {" "}
                  Mulai dari{" "}
                  <span style={{ color: "#FF0000", fontWeight: "600" }}>
                    {result.price}
                  </span>
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ListCard;
