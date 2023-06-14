import React, { useState, useEffect } from 'react';
import '../pages/w-biodata/styleBiodata.css'
import { CloseButton, Modal } from 'react-bootstrap';


const Countdown = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {countdown > 0 ? (
        <p className='alertNotif_danger d-flex justify-content-center align-items-center'>Selesaikan Dalam  {countdown} detik</p>
      ) : (
          <>
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
        

      )}
    </div>
  );
};

export default Countdown;
