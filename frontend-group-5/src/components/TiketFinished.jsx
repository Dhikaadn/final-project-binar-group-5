import React from 'react';
import finished from "../img/finished.jpg";

export const TiketFinished = () => {
  return (
    <div className="TiketFinished">
        <img src={finished} alt="ticket finished"/>
        <p className='text-maaf'>Maaf, tiket terjual habis</p>
        <p className='text-coba'>Coba cari perjalanan lainnya!</p>
    </div>
  )
}
