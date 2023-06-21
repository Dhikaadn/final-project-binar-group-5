import React from "react";
import { NavbarBeranda } from "./NavbarBeranda";
import Button from "react-bootstrap/Button";
import { BiArrowBack } from "react-icons/bi";
import {Link} from "react-router-dom";
import { LoadingBeranda } from "./LoadingBeranda";
import { TiketFinished } from "./TiketFinished";
import { NoneSearch } from "./NoneSearch";
import { ReadyTicket } from "./ReadyTicket";
import { useDispatch, useSelector } from "react-redux";
import { getListPenerbangan } from '../redux/actions/search';
import { Penumpang } from "../redux/actions/penumpang";
import { useEffect } from 'react';
export const Beranda = () => {
  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();

  // useSelector -> to access the global state (redux)
  const { listPenerbangan } = useSelector((state) => state.search);
  const { penumpang } = useSelector((state) => state.penumpang);
  useEffect(() => {
    dispatch(getListPenerbangan(),Penumpang());
  }, [dispatch]);
  console.log(listPenerbangan)
  console.log(penumpang)
  const countPenumpang = penumpang.anak+penumpang.dewasa+penumpang.bayi;
  console.log(countPenumpang)
  return (
    <div className="Beranda">
      <NavbarBeranda />
      <div className="container-detail">
        <h2 className="title-pilih mb-4">Pilih Penerbangan</h2>
        <div className="container-hari-top">
        {listPenerbangan?.length > 0 &&
          listPenerbangan.map((list,i) => (
          <Button className="bt-detail me-3">
            <BiArrowBack className="me-3" />
            {list.departureCity} {">"} {list.arrivalCity} - {countPenumpang} Penumpang - {list.airlineClass}
          </Button>
          ))}
            
          
          <Link to="/"><Button className="bt-pencarian">Ubah Pencarian</Button></Link>
        </div>
        <div className="container-hari-center">
          <div className="hari">
            <Button className="bt-non-hari">
              Senin
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-non-hari">
              Selasa
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-non-hari">
              Rabu
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-hari">
              Kamis
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-hari">
              Jumat
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-non-hari">
              Sabtu
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-non-hari">
              Minggu
              <br />
              01/03/2023
            </Button>
          </div>
          <div className="hari">
            <Button className="bt-non-hari">
              Senin
              <br />
              01/03/2023
            </Button>
          </div>
        </div>
      </div>
      {listPenerbangan.length>0?<ReadyTicket />:<NoneSearch/>}
    </div>
  );
};
