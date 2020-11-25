import React from 'react';
import Header from '../Screens/Header/Header';
import Post from '../Screens/Post/Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed mt-2 border-top'>
      <Header />
      <Post />
    </div>
  );
};

export default Feed;
