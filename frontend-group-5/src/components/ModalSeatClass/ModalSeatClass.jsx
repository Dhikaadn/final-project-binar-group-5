import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./modalseatclass.css";

function ModalSeatClass({ handleClose, buttonText, setButtonText }) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Lakukan pencarian berdasarkan searchText
    // Misalnya, lakukan pencarian di database atau API
    // dan perbarui state searchResults dengan hasil pencarian
    const results = [
      { id: 1, nama: "Economy" },
      { id: 2, nama: "Premium Economy" },
      { id: 3, nama: "Business" },
      { id: 4, nama: "First Class" },
    ];

    setSearchResults(results);
  });

  const handleListClick = (result) => {
    setSelectedItem(result);
  };

  const handleSave = () => {
    if (selectedItem) {
      setButtonText(selectedItem);
      handleClose();
    }
  };

  return (
    <Modal show={true} onHide={handleClose} centered scrollable>
      <Modal.Header closeButton className="border-bottom-0"></Modal.Header>

      <Modal.Body>
        {searchResults.map((result) => (
          <div
            key={result.id}
            onClick={() => handleListClick(result)}
            className={`modal-body-list ${
              selectedItem && selectedItem.id === result.id ? "selected" : ""
            }`}
          >
            <div className="result-name">{result.nama}</div>
            {/* <div
              className={`${
                selectedItem && selectedItem.id === result.id
                  ? "result-price-selected"
                  : "result-price"
              }`}
            >
              {result.harga}
            </div> */}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "#4B1979", borderWidth: 0 }}
          onClick={handleSave}
        >
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSeatClass;
