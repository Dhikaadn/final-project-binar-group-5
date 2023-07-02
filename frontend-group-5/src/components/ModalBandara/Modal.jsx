import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import IconSearch from "../../img/fi_search.svg";
import { Form, FormControl, InputGroup } from "react-bootstrap";

function CustomModal({ handleClose, buttonText, setButtonText }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const Results = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/v1/airport/get-airport`
        );
        setSearchResults(response?.data?.data);
        console.log(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    Results();
  }, []);

  const filteredResults = searchResults.filter((result) =>
    result.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleListClick = (result) => {
    setButtonText(result);
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
            className="border-bottom my-3" style={{cursor:"pointer"}}
          >
            {result}
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
