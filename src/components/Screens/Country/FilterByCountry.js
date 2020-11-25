import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './FilterByCountry.css';

const FilterByCountry = () => {
  return (
    <div className='country'>
      <div className='mt-4 country__container'>
        <div className='country__title'>
          <BsFillCaretDownFill />
          <h4 className='ml-2'>Filter by Country</h4>
        </div>

        <div className='country__info'>
          <p className='country__stars'>United states</p>
          <p className='country__numbers'>74</p>
        </div>
      </div>
    </div>
  );
};

export default FilterByCountry;
