import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import maskapai from '../img/maskapai.jpg';
import time from '../img/time.jpg';
import Button from 'react-bootstrap/Button';

export const ReadyTicket = () => {
  return (
    <div className='ReadyTicket'>
        <Accordion defaultActiveKey="0" className='accordion'>
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
            <img src={time} width="20" height="20" className='ms-4 mt-3'/>
            <div className='container-harga'>
                <p className='harga'>IDR 4.950.000</p>
                <Button className='bt-pilih'>
                    Pilih
                </Button>
            </div>
        </div>
        
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='accordion-item'>
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
  )
}
