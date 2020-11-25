import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './Search.css';

const Search = () => {
  return (
    <div className='search border-top'>
      <form className='mt-4 search__container'>
        <div className='search__icon'>
          <BsSearch />
        </div>

        <input
          type='text'
          className='form-control search__removeBorder'
          placeholder='Search'
        />
      </form>
    </div>
  );
};

export default Search;
