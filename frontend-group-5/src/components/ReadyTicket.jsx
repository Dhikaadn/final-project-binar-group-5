import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import maskapai from '../img/maskapai.jpg';
import time from '../img/time.jpg';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../redux/actions/detail';
import { getListPenerbangan } from '../redux/actions/search';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Penumpang } from "../redux/actions/penumpang";
// import { kelas } from '../redux/actions/kelas';

export const ReadyTicket = () => {
  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useSelector -> to access the global state (redux)
  const { listPenerbangan } = useSelector((state) => state.search);
  const { penumpang } = useSelector((state) => state.penumpang);
  const { uuidUser } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getListPenerbangan(),Penumpang());
  }, [dispatch]);

  // console.log(listPenerbangan[urutan].arrivalCity)
  // console.log(urutan)
  // console.log(listPenerbangan[urutan].arrivalCity)
  

  const handlePilih = (a) =>{
    const airlineCode = listPenerbangan[a].airlineCode;
    const flightClass = listPenerbangan[a].airlineClass;
    const adultPassenger = penumpang.dewasa;
    const childrenPassenger = penumpang.anak;
    const babyPassenger = penumpang.bayi;
    const data = {airlineCode,flightClass,adultPassenger,childrenPassenger,babyPassenger};
    // const detail = { flightClass };
    console.log(data)
    dispatch(getDetail(data, navigate));
    // dispatch(kelas(detail));
  }

  console.log(uuidUser);


  

  return (
    <div className='ReadyTicket'>
       <Accordion>
        {listPenerbangan?.length > 0 &&
          listPenerbangan.map((list,index) => (
            <Accordion.Item eventKey={index} className='accordion-item' key={index}>
              <Accordion.Header className='accordion-header'>
                <div className='container-kelas-pojok-kiri'>
                    <img className='me-3' src={maskapai} alt="logo maskapai"/>
                    {list.airlineName} - {list.airlineClass}
                </div>
            </Accordion.Header>
            <div className='container-detail-jadwal'>
                <div className='container-jam-kota me-3'>
                    <p className='jam mb-0'>{list.departureTime}</p>
                    <p className='kota'>{list.departureCity}</p>
                </div>
                <div className='container-garis'>
                    <div className='garis-top'>
                        {list.longFlight} 
                    </div>
                    <div className='garis-bottom'>
                        Direct
                    </div>
                </div>
                <div className='container-jam-kota-2 ms-3'>
                    <p className='jam mb-0'>{list.arrivalTime}</p>
                    <p className='kota'>{list.arrivalCity}</p>
                </div>
                <img src={time} width="20" height="20" className='ms-4 mt-3' alt='time-logo'/>
                <div className='container-harga'>
                    <p className='harga me-3'>IDR {list.airlinePrice}</p>
                    <Button className='bt-pilih me-3' onClick={(e)=>handlePilih(index)}>
                        Pilih
                    </Button>
                </div>
            </div>
            <Accordion.Body>
              <div className='container-keberangkatan'>
                <div className='container-keberangkatan-left'>
                  <p className='title-detail'>Detail Penerbangan</p>
                  <p className='jam'>{list.departureTime}</p>
                  <p>{list.departureDate}</p>
                  <p>{list.departureCity}</p>
                </div>
                <div className='container-keberangkatan-right'>
                  <p className='title-status'>
                    Keberangkatan
                  </p>
                </div>
              </div>
              <div className='container-informasi ps-5'>
                <div className='container-informasi-top'>
                  <p className='maskapai-bold'>{list.airlineName}-{list.airlineClass}-{list.airlineCode}</p>
                </div>
                <div className='container-informasi-logo'>
                  <img src={maskapai} alt="maskapai logo"/>
                  <p className='informasi-bold'>Informasi:</p>
                </div>
                <p>Baggage {list.checkedBaggage} kg</p>
                <p>Cabin baggage {list.cabinBaggage} kg</p>
                <p>In Flight Entertainment</p>  
              </div>
              <div className='container-kedatangan'>
                <div className='container-kedatangan-left'>
                  <p className='jam'>{list.arrivalTime}</p>
                  <p>{list.arrivalDate}</p>
                  <p>{list.arrivalCity}</p>
                </div>
                <div className='container-kedatangan-right'>
                  <p className='title-status'>
                    Kedatangan
                  </p>
                </div>
              </div>
            </Accordion.Body>
            </Accordion.Item>
            ))}
            </Accordion>
    </div>
)}

    /* <Accordion.Item eventKey="1" className='accordion-item'>
        <Accordion.Header className='accordion-header'>
            <div className='container-kelas-pojok-kiri'>
                <img className='me-3' src={maskapai} alt="logo maskapai"/>
                Jet Air - Economy
            </div>
        </Accordion.Header>
        <div className='container-detail-jadwal'>
            <div className='container-jam-kota me-3'>
                <p className='jam mb-0'>08:00</p>
                <p className='kota'>JKT</p>
            </div>
            <div className='container-garis'>
                <div className='garis-top'>
                    4h 0m
                </div>
                <div className='garis-bottom'>
                    Direct
                </div>
            </div>
            <div className='container-jam-kota-2 ms-3'>
                <p className='jam mb-0'>08:00</p>
                <p className='kota'>JKT</p>
            </div>
            <img src={time} width="20" height="20" className='ms-4 mt-3' alt='time-logo'/>
            <div className='container-harga'>
                <p className='harga-merah'>IDR 4.950.000</p>
                <Button className='bt-pilih'>
                    Pilih
                </Button>
            </div>
        </div>
        <Accordion.Body>
          <div className='container-keberangkatan'>
            <div className='container-keberangkatan-left'>
              <p className='title-detail'>Detail Penerbangan</p>
              <p className='jam'>07.00</p>
              <p>3 Maret 2023</p>
              <p>Soekarno Hatta - Terminal 1A Domestik</p>
            </div>
            <div className='container-keberangkatan-right'>
              <p className='title-status'>
                Keberangkatan
              </p>
            </div>
          </div>
          <div className='container-informasi ps-5'>
            <div className='container-informasi-top'>
              <p className='maskapai-bold'>Jet Air-Economy-JT-203</p>
            </div>
            <div className='container-informasi-logo'>
              <img src={maskapai} alt="maskapai logo"/>
              <p className='informasi-bold'>Informasi:</p>
            </div>
            <p>Baggage 20 kg</p>
            <p>Cabin baggage 7 kg</p>
            <p>In Flight Entertainment</p>  
          </div>
          <div className='container-kedatangan'>
            <div className='container-kedatangan-left'>
              <p className='jam'>11.00</p>
              <p>3 Maret 2023</p>
              <p>Melbourne International Airport</p>
            </div>
            <div className='container-kedatangan-right'>
              <p className='title-status'>
                Kedatangan
              </p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item> */