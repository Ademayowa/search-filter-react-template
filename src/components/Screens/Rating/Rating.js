import React from 'react';
import { BsFillCaretDownFill, BsStarFill } from 'react-icons/bs';
import './Rating.css';

const Rating = () => {
  return (
    <div className='rating'>
      <div className='mt-4 rating__container'>
        <div className='rating__title'>
          <BsFillCaretDownFill />
          <h4 className='ml-2'>Filter by Rating</h4>
        </div>

        <div className='rating__info'>
          <p className='rating__stars'>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </p>
          <p className='mt-2 rating__numbers'>126</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
