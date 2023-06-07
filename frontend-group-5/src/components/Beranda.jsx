import React from 'react';
import { NavbarBeranda } from './NavbarBeranda';
import Button from 'react-bootstrap/Button';
import { BiArrowBack} from 'react-icons/bi';

export const Beranda = () => {
  return (
    <div className='Beranda'>
        <NavbarBeranda/>
        <div className='container-detail'>
          <h2 className='title-pilih mb-4'>Pilih Penerbangan</h2>
          <div className='container-hari-top'>
            <Button className='bt-detail me-3'>
              <BiArrowBack className='me-3'/>
              JKT > MLB - 2 Penumpang - Economy
            </Button>
            <Button className='bt-pencarian'>
              Ubah Pencarian
            </Button>
          </div>
          <div className='container-hari-center'>
            <div className='hari'>
              <Button className='bt-hari'>
                Senin<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
              <Button className='bt-hari'>
                Selasa<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
              <Button className='bt-hari'>
                Rabu<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
              <Button className='bt-hari'>
                Kamis<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
              <Button className='bt-hari'>
                Jumat<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
              <Button className='bt-hari'>
                Sabtu<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
              <Button className='bt-hari'>
                Minggu<br/>
                01/03/2023
              </Button>
            </div>
            <div className='hari'>
            <Button className='bt-hari'>
              Senin<br/>
              01/03/2023
            </Button>
            </div>
          </div>
        </div>
    </div>
  )
}
