import React from 'react';
import { BsBellFill, BsFillCaretDownFill, BsBraces } from 'react-icons/bs';
import { BiWifi } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container mt-4'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-5 header__reviews'>
            <p className='mt-2'>Viewing 1-10 of 157 Reviews</p>
          </div>

          <div className='header__icons'>
            <div className='border px-3'>
              <BsBellFill /> Create Alert <BsFillCaretDownFill />
            </div>

            <div className='border px-3 ml-auto header__rightIcons'>
              <BiWifi />
              <BsBraces />
              <FaDownload />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
