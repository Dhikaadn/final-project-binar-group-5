import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ImgDestination from "../img/img_destinasi.svg";

function ListCard({ category }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Lakukan pencarian berdasarkan searchText
    // Misalnya, lakukan pencarian di database atau API
    // dan perbarui state searchResults dengan hasil pencarian
    const results = [
      {
        id: 1,
        category: "Asia",
        rute: "Jakarta -> Bangkok",
        maskapai: "Air Asia",
        tanggal: "20 - 30 Maret 2023",
        harga: "IDR 950.000",
      },
      {
        id: 2,
        category: "Asia",
        rute: "Jakarta -> Singapore",
        maskapai: "Garuda Indonesia",
        tanggal: "10 - 15 April 2023",
        harga: "IDR 1.200.000",
      },
      {
        id: 3,
        category: "Asia",
        rute: "Jakarta -> Tokyo",
        maskapai: "Japan Airlines",
        tanggal: "5 - 15 Mei 2023",
        harga: "IDR 2.500.000",
      },
      {
        id: 4,
        category: "Australia",
        rute: "Jakarta -> Sydney",
        maskapai: "Qantas",
        tanggal: "1 - 10 Juni 2023",
        harga: "IDR 3.000.000",
      },
      {
        id: 5,
        category: "Eropa",
        rute: "Jakarta -> London",
        maskapai: "British Airways",
        tanggal: "15 - 25 Juli 2023",
        harga: "IDR 4.500.000",
      },
      {
        id: 6,
        category: "Amerika",
        rute: "Jakarta -> New York",
        maskapai: "Emirates",
        tanggal: "10 - 20 Agustus 2023",
        harga: "IDR 5.800.000",
      },
    ];

    // Filter hasil pencarian berdasarkan searchText
    let filteredResults;

    if (category === "Semua") {
      // Menampilkan semua hasil jika tombol "Semua" aktif
      filteredResults = results;
    } else {
      // Filter hasil berdasarkan kategori yang dipilih
      filteredResults = results.filter(
        (result) => result.category === category
      );
    }

    setSearchResults(filteredResults);
  }, [category]);

  return (
    <Container className=" p-2">
      <div className="list_container" >
        {searchResults.map((result) => (
          <div className="m-2"
            style={{ display: "flex", justifyItems: "flex-start" }}
          >
            <Card style={{ width: "180px", }} >
              <img
                src={ImgDestination}
                className="card-img-top p-2"
                alt="..."
              />
              <div className="p-2 d-flex flex-column">
                <h5 style={{ fontSize: "14px", fontWeight:"bold" }}>{result.rute}</h5>
                <span className="card-maskapai pb-2" >
                  {result.maskapai}
                </span>
                <span className="card-subtitle pb-2" > {result.tanggal} </span>
                <p className="card-subtitle " > Mulai dari{" "}
                  <span style={{ color: "#FF0000", fontWeight: "600" }}>
                    {result.harga}
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
