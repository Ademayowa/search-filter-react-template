import React from 'react';
import { BsFillSquareFill, BsStarFill } from 'react-icons/bs';

import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      <div className='post__container mt-4'>
        <div className='card p-4 mb-4'>
          <div className='post__top d-flex align-items-center justify-content-between'>
            <BsFillSquareFill className='post__squareIcon' />
            <h5>
              <span className='badge badge-light'>iOS</span>
            </h5>
            <h4 className='font-weight-bold'>
              <strong>I use it everyday!</strong>
            </h4>
            <p className='post__stars'>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </p>

            <div className='post__rightButton'>
              <button className='btn btn-light btn-sm'>Translated</button>
            </div>
          </div>

          <div className='post__center mt-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              obcaecati cupiditate nihil nam quo natus neque ab.
            </p>
          </div>

          <div className='post__bottom d-flex align-items-center justify-content-between'>
            <p>By Chelsea</p>
            <p>2 hours ago</p>
            <p>v1.0.0</p>
            <p>United States</p>
          </div>
        </div>

        <div className='card p-4 mb-4'>
          <div className='post__top d-flex align-items-center justify-content-between'>
            <BsFillSquareFill className='post__squareIcon' />
            <h5>
              <span className='badge badge-light'>iOS</span>
            </h5>
            <h4 className='font-weight-bold'>
              <strong>I use it everyday!</strong>
            </h4>
            <p className='post__stars'>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </p>

            <div className='post__rightButton'>
              <button className='btn btn-light btn-sm'>Translated</button>
            </div>
          </div>

          <div className='post__center mt-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              obcaecati cupiditate nihil nam quo natus neque ab.
            </p>
          </div>

          <div className='post__bottom d-flex align-items-center justify-content-between'>
            <p>By Chelsea</p>
            <p>2 hours ago</p>
            <p>v1.0.0</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
