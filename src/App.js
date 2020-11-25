import React from 'react';
import Feed from './components/Feed/Feed';
import SelectProducts from './components/Products/SelectProducts';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <>
      <SelectProducts />
      <main className='container d-flex'>
        <Sidebar />
        <Feed />
      </main>
    </>
  );
};

export default App;
