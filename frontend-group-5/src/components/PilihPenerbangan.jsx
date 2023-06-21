import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "./DateTime";
import CustomModal from "./ModalBandara/Modal";
import ModalPenumpang from "./ModalPenumpang/ModalPenumpang";
import ModalSeatClass from "./ModalSeatClass/ModalSeatClass";
import IconPesawat from "../img/icon_pesawat.svg";
import IconDate from "../img/icon_calender.svg";
import IconPerson from "../img/icon_penumpang.svg";

import { useDispatch } from "react-redux";
import { getListPenerbangan } from "../redux/actions/search";

function PilihPenerbangan() {
  const [showModal, setShowModal] = useState(false);
  const [showModalPenumpang, setShowModalPenumpang] = useState(false);
  const [showModalSeatClass, setShowModalSeatClass] = useState(false);
  const [buttonText1, setButtonText1] = useState("Jakarta");
  const [buttonText2, setButtonText2] = useState("Bali");
  const [seatClass, setSeatClass] = useState({
    id: 1,
    nama: "Economy",
    harga: "IDR 4.950.000",
  });
  const [activeButton, setActiveButton] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [passengerCount, setPassengerCount] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const year = selectedDate ? selectedDate.getFullYear() : null;
  const month = selectedDate
    ? String(selectedDate.getMonth() + 1).padStart(2, "0")
    : null;
  const date = selectedDate
    ? String(selectedDate.getDate()).padStart(2, "0")
    : null;

  const formattedDate = selectedDate ? `${year}-${month}-${date}` : null;

  // console.log(formattedDate);
  const data = { formattedDate, buttonText1, buttonText2, seatClass };

  console.log(data);

  // modal pertama
  const handleButtonModal = (buttonNumber) => {
    setShowModal(true);
    setActiveButton(buttonNumber);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveButton(null);
  };

  const handleListClick = (result) => {
    if (activeButton === 1) {
      setButtonText1(result.text);
    } else if (activeButton === 2) {
      setButtonText2(result.text);
    }
    handleCloseModal();
  };

  //date
  const handleDateChange = (date) => {
    setSelectedDate(date || new Date()); // Jika date adalah null, gunakan tanggal saat ini
  };

  //jumlah penumpang modal
  const handleCloseModalPenumpang = () => {
    setShowModalPenumpang(false);
  };

  const handlePassengerCountChange = (count) => {
    setPassengerCount(count);
  };

  //modal seatclass
  const handleCloseModalSeatClass = () => {
    setShowModalSeatClass(false);
  };

  const handleListSeatClick = (result) => {
    setSeatClass(result);
    handleCloseModalSeatClass();
  };

  // const handleButtonClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://backend-binar-final-project-production.up.railway.app/api/v1/schedule/search`,
  //       {
  //         params: {
  //           depDate: formattedDate,
  //           depAirport: buttonText1,
  //           arrAirport: buttonText2,
  //           seatClass: seatClass.nama,
  //         },
  //       }
  //     );

  //     console.log(response.data.data);
  //     // Lakukan apa yang Anda inginkan dengan data yang diterima dari API
  //   } catch (error) {
  //     console.error(error);
  //     // Tangani kesalahan jika terjadi
  //   }
  // };

  const handleButtonClick = () => {
    const data = { formattedDate, buttonText1, buttonText2, seatClass };
    dispatch(getListPenerbangan(data, navigate));
  };

  // console.log(seatClass);
  return (
    <>
      <div className="card card-rounded mb-5 card-pilih-penerbangan">
        <div className="card-body">
          <h5 className="card-title">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span style={{ color: "#7126B5" }}>Tiketku!</span>
          </h5>

          {/* atas */}
          <div className="container-pilih-penerbangan">
            <div>
              <div className="input-group mb-3 card-input-pilih-penerbangan">
                <div className="icon-penerbangan">
                  <img src={IconPesawat} />
                  <div>
                    <p className="m-0 text-center" style={{ color: "#8A8A8A" }}>
                      from
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn-pilih-penerbangan"
                    onClick={() => handleButtonModal(1)}
                  >
                    {buttonText1}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="input-group mb-3 card-input-pilih-penerbangan">
                <div className=" icon-penerbangan">
                  <img src={IconPesawat} />
                  <div>
                    <p className="m-0 text-center" style={{ color: "#8A8A8A" }}>
                      to
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn-pilih-penerbangan "
                    onClick={() => handleButtonModal(2)}
                  >
                    {buttonText2}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* bawah */}
          <div className="container-pilih-penerbangan">
            <div>
              <div className="input-group mb-3 card-input-pilih-penerbangan">
                <div className=" input-group-prepend icon-penerbangan">
                  <img src={IconDate} />
                  <div>
                    <p className="m-0 text-center" style={{ color: "#8A8A8A" }}>
                      Date
                    </p>
                  </div>
                </div>
                <div className=" d-flex justify-content-between">
                  <DateTimePicker
                    label="Departure"
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="input-group mb-3 card-input-pilih-penerbangan">
                <div className="input-group-prepend icon-penerbangan">
                  <img src={IconPerson} />
                  <div>
                    <p className="m-0 text-center" style={{ color: "#8A8A8A" }}>
                      to
                    </p>
                  </div>
                </div>
                <div className="button-passenger">
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#8A8A8A",
                        marginBottom: 0,
                      }}
                    >
                      Passenger
                    </p>
                    <button
                      type="button"
                      className="btn-pilih-penerbangan"
                      onClick={() => setShowModalPenumpang(true)}
                    >
                      {passengerCount} Penumpang
                    </button>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#8A8A8A",
                        marginBottom: 0,
                      }}
                    >
                      Seat Class
                    </p>
                    <button
                      type="button"
                      className="btn-pilih-penerbangan"
                      onClick={() => setShowModalSeatClass(true)}
                    >
                      {seatClass.nama}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <button
            className="btn-utama-pilih-penerbangan"
            onClick={() => handleButtonClick()}
          >
            Cari Penerbangan
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <CustomModal
          handleClose={handleCloseModal}
          buttonText={activeButton === 1 ? buttonText1 : buttonText2}
          setButtonText={activeButton === 1 ? setButtonText1 : setButtonText2}
          handleListClick={handleListClick}
        />
      )}

      {/* Modal Penumpang */}
      {showModalPenumpang && (
        <ModalPenumpang
          show={showModalPenumpang}
          handleClose={handleCloseModalPenumpang}
          passengerCount={passengerCount}
          setCountPassenger={setPassengerCount}
          handlePassengerCountChange={handlePassengerCountChange}
        />
      )}

      {/* Modal Seat Class */}
      {showModalSeatClass && (
        <ModalSeatClass
          handleClose={handleCloseModalSeatClass}
          buttonText={seatClass}
          setButtonText={setSeatClass}
          handleListClick={handleListSeatClick}
        />
      )}
    </>
  );
}

export default PilihPenerbangan;
