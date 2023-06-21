import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import IconSearch from "../../img/fi_search.svg";
import { Form, FormControl, InputGroup } from "react-bootstrap";

function CustomModal({ handleClose, buttonText, setButtonText }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   // Lakukan pencarian berdasarkan searchText
  //   // Misalnya, lakukan pencarian di database atau API
  //   // dan perbarui state searchResults dengan hasil pencarian
  //   const results = [
  //     { id: 1, text: "Jakarta (JKTA)" },
  //     { id: 2, text: "Melbourne (MLB)" },
  //     { id: 3, text: "Surabaya (SBY)" },
  //     { id: 4, text: "Jepang (JP)" },
  //     { id: 5, text: "Australia (AU)" },
  //     { id: 6, text: "Korea Selatan (KR)" },
  //     { id: 7, text: "Amerika Serikat (US)" },
  //     { id: 8, text: "Uni Emirat Arab (UEA)" },
  //     { id: 9, text: "China (CH)" },
  //     { id: 10, text: "Belanda (BL)" },
  //   ];

  //   // Filter hasil pencarian berdasarkan searchText
  //   const filteredResults = results.filter((result) =>
  //     result.text.toLowerCase().includes(searchText.toLowerCase())
  //   );

  //   setSearchResults(filteredResults);
  // }, [searchText]);

  useEffect(() => {
    const Results = async () => {
      try {
        const response = await axios.get(
          "https://binar-backend-final-project-production.up.railway.app/api/v1/bandara"
        );
        setSearchResults(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    Results();
  }, []);

  const filteredResults = searchResults.filter((result) =>
    result.namaBandara.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleListClick = (result) => {
    setButtonText(result.namaBandara);
    handleClose();
  };

  return (
    <Modal show={true} onHide={handleClose} centered scrollable>
      <Modal.Header closeButton className="border-bottom-0">
        <InputGroup>
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
      </Modal.Header>
      <Modal.Body
        style={{
          marginBottom: "0",
          paddingBottom: "0",
        }}
      >
        <h6>Pencarian Terkini</h6>
      </Modal.Body>

      <Modal.Body
        style={{
          paddingTop: "0",
          height: "300px",
          overflowY: "auto",
        }}
      >
        {filteredResults.map((result) => (
          <div
            key={result.id}
            onClick={() => handleListClick(result)}
            className="modal-body-list"
          >
            {result.namaBandara}
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
