import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import './AllTime.css';

const AllTime = () => {
  return (
    <div className='mt-4 allTime'>
      <form className=' allTime__container'>
        <div className='allTime__icon'>
          <BsCalendar />
        </div>

        <div className='allTime__option'>
          <select className='form-control allTime__removeBorder'>
            <option>all time</option>
            <option>2</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AllTime;
