import React from 'react';
import AllTime from '../Screens/AllTime/AllTime';
import FilterByCountry from '../Screens/Country/FilterByCountry';
import FilterByVersion from '../Screens/Version/FilterByVersion';
import Rating from '../Screens/Rating/Rating';
import Search from '../Screens/Search/Search';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='mt-2 sidebar'>
      <Search />
      <AllTime />
      <Rating />
      <FilterByVersion />
      <FilterByCountry />
    </div>
  );
};

export default Sidebar;
