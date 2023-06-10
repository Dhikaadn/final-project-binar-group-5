import React from 'react';
import none from '../img/none.jpg'

export const NoneSearch = () => {
  return (
    <div className='NoneSearch'>
        <img src={none} alt='none search'/>
        <p className='text-maaf'>Maaf, pencarian Anda tidak ditemukan</p>
        <p className='text-coba'>Coba cari perjalanan lainnya!</p>
    </div>
  )
}
