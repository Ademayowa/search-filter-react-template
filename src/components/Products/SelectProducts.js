import React from 'react';
import { BsFillSquareFill } from 'react-icons/bs';
import './SelectProducts.css';

const SelectProducts = () => {
  return (
    <section className='selectProducts'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='form-group col-md-6'>
            <BsFillSquareFill className='ml-2 selectProducts__squareIcon' />
            <label for='products'>select products</label>
            <select className='form-control selectedProducts__options'>
              <option>My App +2</option>
              <option>2</option>
            </select>
          </div>

          <div className='form-group col-md-3 pl-lg-5'>
            <label for='sorting'>sorting</label>
            <select className='form-control'>
              <option>Newest First</option>
              <option>2</option>
            </select>
          </div>

          <div className='form-group col-md-3 '>
            <label for='sorting'>translation</label>
            <select className='form-control'>
              <option>English</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectProducts;
