import React, { useState } from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LoadingBeranda } from "./LoadingBeranda";
import { TiketFinished } from "./TiketFinished";
import { NoneSearch } from "./NoneSearch";
import { ReadyTicket } from "./ReadyTicket";
import { useDispatch, useSelector } from "react-redux";
import { getListPenerbangan } from "../redux/actions/search";
import { Penumpang } from "../redux/actions/penumpang";
import { useEffect } from "react";
import { dataNew } from "../redux/actions/kelas";
import { useNavigate } from "react-router-dom";

export const Beranda = () => {
  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useSelector -> to access the global state (redux)
  const { listPenerbangan } = useSelector((state) => state.search);
  const { penumpang } = useSelector((state) => state.penumpang);
  const { dataAwal } = useSelector((state) => state.kelas);

  const [futureDates, setFutureDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    dispatch(getListPenerbangan(), Penumpang());
  }, [dispatch]);

  const countPenumpang = penumpang.anak + penumpang.dewasa + penumpang.bayi;

  useEffect(() => {
    const currentDate = dataAwal.formattedDate
      ? new Date(dataAwal.formattedDate)
      : new Date();

    const dates = [];
    for (let i = 0; i < 6; i++) {
      const futureDate = `${currentDate.toISOString().split("T")[0]}`;
      dates.push(futureDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setFutureDates(dates);
    setSelectedDate(dates[0]); // Set nilai awal selectedDate
  }, [dataAwal.formattedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  // console.log(data);

  useEffect(() => {
    const buttonText1 = dataAwal.buttonText1;
    const buttonText2 = dataAwal.buttonText2;
    const seatClass = dataAwal.seatClass;
    const formattedDate = selectedDate;
    const data = { buttonText1, buttonText2, seatClass, formattedDate };
    console.log(data);
    dispatch(dataNew(data));
    dispatch(getListPenerbangan(data, navigate));
  }, [selectedDate]);

  console.log(selectedDate);

  return (
    <div className="Beranda">
      <NavbarBeranda />
      <div className="container-detail">
        <h2 className="title-pilih mb-4">Pilih Penerbangan</h2>
        <div className="container-hari-top">
            {listPenerbangan.length>0?
            <Button className="bt-detail me-3">
            <BiArrowBack className="me-3" />
            {listPenerbangan[0].departureCity} {">"} {listPenerbangan[0].arrivalCity} - {countPenumpang}{" "}
            Penumpang - {listPenerbangan[0].airlineClass}
          </Button>
            :<div></div>}
          <Link to="/">
            <Button className="bt-pencarian">Ubah Pencarian</Button>
          </Link>
        </div>
        <div className="container-hari-center">
          {futureDates.map((date, index) => (
            <div className="hari" key={index}>
              <Button
                className={`bt-non-hari ${
                  selectedDate === date ? "active" : ""
                }`}
                onClick={() => handleDateSelect(date)}
              >
                {date}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {listPenerbangan.length > 0 ? <ReadyTicket /> : <NoneSearch />}
    </div>
  );
};
