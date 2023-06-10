import React from 'react';
import loading from '../img/loading.jpg'

export const LoadingBeranda = () => {
  return (
    <div className='LoadingBeranda'>
        <p className='text-loading'>Mencari penerbangan terbaik...</p>
        <img src={loading} alt='loading'/>
    </div>
  )
}
