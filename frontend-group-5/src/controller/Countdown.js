import React, { useState, useEffect } from 'react';
import '../pages/w-biodata/styleBiodata.css'
import { CloseButton, Modal } from 'react-bootstrap';


const Countdown = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0); //update time

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <>
            <p className='alertNotif_danger d-flex justify-content-center align-items-center'>Waktu Anda Habis!</p> 
            <Modal show={show}  backdrop='static'>
              <Modal.Body className='d-flex justify-content-between align-items-center bg-danger'>

              <div>
                <span className='text-white'>Maaf, waktu pemesanan habis. Silahkan ulangi lagi!
                </span>
              </div>
              <div className="notif_modal">
                <CloseButton onClick={handleClose} variant='white' className='fw-bold'/>
              </div>
              </Modal.Body>
            </Modal>
      </>
      ) : (
          
        <p className='alertNotif_danger d-flex justify-content-center align-items-center'>
          Selesaikan pembayaran Anda {minutes.toString().padStart(2, '0')} menit { }
        {seconds.toString().padStart(2, '0')} detik</p>
      )}
    </>
  );
};

export default Countdown;
