import React, { useEffect, useState } from "react";
import ImgDestination from "../img/img_destinasi.svg";
import { Card, Col, Container, Row } from "react-bootstrap";

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
        <Container className="mt-3">
            <Row>
                {searchResults.map((result) => (
                    <Col className="my-2 d-flex justify-content-start" >
                        <Card style={{width:"200px"}}>
                            <Card.Img variant="top"
                                src={ImgDestination}
                                className="p-2"
                                alt="..."
                            />
                            <div className="p-2">
                                <Card.Title style={{fontSize:"16px", fontWeight:"bold"}}>{result.rute}</Card.Title>
                                <Card.Text className="d-flex flex-column">
                                    <span className="card-maskapai pb-2" > {result.maskapai} </span>
                                    <span className="card-subtitle pb-2" > {result.tanggal} </span>
                                    <span className="card-subtitle" >
                                        Mulai dari{" "}
                                        <span style={{ color: "#FF0000", fontWeight: "bold", marginLeft:"6px" }}>
                                            {result.harga}
                                        </span>
                                    </span>
                                </Card.Text>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ListCard;
