import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './FilterByVersion.css';

const FilterByVersion = () => {
  return (
    <div className='version'>
      <div className='mt-4 version__container'>
        <div className='version__title'>
          <BsFillCaretDownFill />
          <h4 className='ml-2'>Filter by Version</h4>
        </div>

        <div className='version__info'>
          <p className='version__stars'>1.2.0</p>
          <p className='version__numbers'>3</p>
        </div>
      </div>
    </div>
  );
};

export default FilterByVersion;
