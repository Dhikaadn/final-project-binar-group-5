import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modalpenumpang.css";
import { useDispatch } from "react-redux";
import { Penumpang } from "../../redux/actions/penumpang";

function ModalPenumpang({
  show,
  handleClose,
  countPassenger,
  setCountPassenger,
}) {
  const dispatch = useDispatch();

  const [dewasa, setDewasa] = useState(1);
  const [anak, setAnak] = useState(0);
  const [bayi, setBayi] = useState(0);

  // useEffect(() => {
  //   dispatch(setPenumpang());
  // }, [dispatch]);

  const handleIncrement = (type) => {
    if (type === "dewasa") {
      setDewasa((prevCount) => prevCount + 1);
    } else if (type === "anak") {
      setAnak((prevCount) => prevCount + 1);
    } else if (type === "bayi") {
      setBayi((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "dewasa") {
      setDewasa((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } else if (type === "anak") {
      setAnak((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } else if (type === "bayi") {
      setBayi((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }
  };

  const handleSaveChanges = () => {
    const totalPassenger = dewasa + anak + bayi;
    setCountPassenger(totalPassenger);
    const detail = { dewasa, anak, bayi };
    dispatch(Penumpang(detail));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Passenger</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="passenger-counter">
          <div>
            <p>Dewasa</p>
            <div className="counter-container">
              <button
                className="counter-btn"
                onClick={() => handleDecrement("dewasa")}
              >
                -
              </button>
              <span className="counter-value">{dewasa}</span>
              <button
                className="counter-btn"
                onClick={() => handleIncrement("dewasa")}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p>Anak</p>
            <div className="counter-container">
              <button
                className="counter-btn"
                onClick={() => handleDecrement("anak")}
              >
                -
              </button>
              <span className="counter-value">{anak}</span>
              <button
                className="counter-btn"
                onClick={() => handleIncrement("anak")}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p>Bayi</p>
            <div className="counter-container">
              <button
                className="counter-btn"
                onClick={() => handleDecrement("bayi")}
              >
                -
              </button>
              <span className="counter-value">{bayi}</span>
              <button
                className="counter-btn"
                onClick={() => handleIncrement("bayi")}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "#4B1979" }}
          onClick={handleSaveChanges}
        >
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPenumpang;
