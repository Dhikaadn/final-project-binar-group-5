import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import maskapai from '../img/maskapai.jpg';
import time from '../img/time.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const ReadyTicket = () => {
  return (
    <div className='ReadyTicket'>
        <Accordion defaultActiveKey="0" className='accordionnn'>
      <Accordion.Item eventKey="0" className='accordion-item'>
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
                <p className='harga'>IDR 4.950.000</p>
                <Button as={Link} to={'/biodata_pemesanan'} className='bt-pilih'>
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
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='accordion-item'>
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
      </Accordion.Item>
    </Accordion>
    </div>
    
  )
}
