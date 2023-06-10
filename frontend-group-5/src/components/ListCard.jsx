import React, { useEffect, useState } from "react";
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

    setSearchResults(filteredResults.slice(0, 5));
  }, [category]);

  return (
    <div className="container p-4">
      <div className="row">
        {searchResults.map((result) => (
          <div className="col my-2">
            <div className="card " style={{ width: "170px" }}>
              <img
                src={ImgDestination}
                className="card-img-top p-2"
                alt="..."
              />
              <div className="card-body" style={{ padding: "6px" }}>
                <h5 style={{ fontSize: "14px" }}>{result.rute}</h5>
                <p
                  className="card-subtitle mb-1"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#7126B5",
                  }}
                >
                  {result.maskapai}
                </p>
                <p
                  className="card-subtitle mb-2"
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {result.tanggal}
                </p>

                <p
                  className="card-subtitle mb-1"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Mulai dari{" "}
                  <span style={{ color: "#FF0000", fontWeight: "600" }}>
                    {result.harga}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="col my-2">
          <div className="card " style={{ width: "170px" }}>
            <img src={ImgDestination} className="card-img-top p-2" alt="..." />
            <div className="card-body" style={{ padding: "6px" }}>
              <h5 style={{ fontSize: "14px" }}>Jakarta {"->"} Bangkok</h5>
              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#7126B5",
                }}
              >
                Air Asia
              </p>
              <p
                className="card-subtitle mb-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                20 - 30 Maret 2023
              </p>

              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Mulai dari{" "}
                <span style={{ color: "#FF0000", fontWeight: "700" }}>
                  IDR 950.000
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div className="card " style={{ width: "170px" }}>
            <img src={ImgDestination} className="card-img-top p-2" alt="..." />
            <div className="card-body" style={{ padding: "6px" }}>
              <h5 style={{ fontSize: "14px" }}>Jakarta {"->"} Bangkok</h5>
              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#7126B5",
                }}
              >
                Air Asia
              </p>
              <p
                className="card-subtitle mb-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                20 - 30 Maret 2023
              </p>

              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Mulai dari{" "}
                <span style={{ color: "#FF0000", fontWeight: "700" }}>
                  IDR 950.000
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div className="card " style={{ width: "170px" }}>
            <img src={ImgDestination} className="card-img-top p-2" alt="..." />
            <div className="card-body" style={{ padding: "6px" }}>
              <h5 style={{ fontSize: "14px" }}>Jakarta {"->"} Bangkok</h5>
              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#7126B5",
                }}
              >
                Air Asia
              </p>
              <p
                className="card-subtitle mb-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                20 - 30 Maret 2023
              </p>

              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Mulai dari{" "}
                <span style={{ color: "#FF0000", fontWeight: "700" }}>
                  IDR 950.000
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div className="card " style={{ width: "170px" }}>
            <img src={ImgDestination} className="card-img-top p-2" alt="..." />
            <div className="card-body" style={{ padding: "6px" }}>
              <h5 style={{ fontSize: "14px" }}>Jakarta {"->"} Bangkok</h5>
              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#7126B5",
                }}
              >
                Air Asia
              </p>
              <p
                className="card-subtitle mb-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                20 - 30 Maret 2023
              </p>

              <p
                className="card-subtitle mb-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Mulai dari{" "}
                <span style={{ color: "#FF0000", fontWeight: "700" }}>
                  IDR 950.000
                </span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ListCard;
