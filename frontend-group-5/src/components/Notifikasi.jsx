import React, { useEffect, useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import { FormControl, InputGroup, Button } from "react-bootstrap";

import { BiArrowBack } from "react-icons/bi";
import IconSearch from "../img/fi_search.svg";
import IconNotif from "../img/notifikasi_icon.svg";

function Notifikasi() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = [
      {
        id: 1,
        category: "Promosi",
        isi: "Dapatkan Potongan 50% Tiket!",
        tanggal: "5 Maret, 14:04",
      },
      {
        id: 2,
        category: "Notifikasi",
        isi: "Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!",
        tanggal: "20 Maret, 14:04",
      },
      {
        id: 3,
        category: "Promosi",
        isi: "Diskon Spesial untuk Pelanggan Setia!",
        tanggal: "10 Maret, 10:30",
      },
      {
        id: 4,
        category: "Notifikasi",
        isi: "Kode booking 78HJ2 Anda telah dikonfirmasi. Cek email Anda untuk detail perjalanan.",
        tanggal: "10 Maret, 09:15",
      },
      {
        id: 5,
        category: "Notifikasi",
        isi: "Penerbangan dengan kode booking 23RT5 telah dibatalkan. Mohon hubungi layanan pelanggan untuk informasi lebih lanjut.",
        tanggal: "15 Maret, 16:30",
      },
      {
        id: 6,
        category: "Promosi",
        isi: "Promo Terbatas: Beli 1 Gratis 1!",
        tanggal: "15 Maret, 12:15",
      },
      {
        id: 7,
        category: "Promosi",
        isi: "Diskon Heboh Akhir Tahun!",
        tanggal: "25 Maret, 09:45",
      },
      {
        id: 8,
        category: "Promosi",
        isi: "Promo Spesial Hari Raya!",
        tanggal: "20 Maret, 16:30",
      },
    ];

    // Filter hasil pencarian berdasarkan searchText, category, dan tanggal
    const filteredResults = results.filter((result) => {
      const isMatch =
        result.isi.toLowerCase().includes(searchText.toLowerCase()) ||
        result.category.toLowerCase().includes(searchText.toLowerCase()) ||
        result.tanggal.toLowerCase().includes(searchText.toLowerCase());
      return isMatch;
    });

    setSearchResults(filteredResults);
  }, [searchText]);

  return (
    <div>
      <NavbarBeranda />
      <div className="container w-75">
        <div
          className="container-hari-top my-4"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button className="bt-detail me-3" style={{ flexGrow: 1 }}>
            <BiArrowBack className="me-3" />
            Beranda
          </Button>
          <InputGroup style={{ width: "20rem" }}>
            <InputGroup.Text>
              <img src={IconSearch} alt="Search Icon" />
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      <div
        className="container w-75 "
        style={{ maxHeight: "480px", overflowY: "auto" }}
      >
        {searchResults.map((result) => (
          <div key={result.id} className="card-result">
            <img src={IconNotif} className="notifikasi_img" />
            <div className="w-100">
              <div className="result-item">
                <div className="category">{result.category}</div>
                <div className="tanggal">{result.tanggal}</div>
              </div>
              <div className="isi">{result.isi}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifikasi;
