/* eslint-disable react/jsx-indent-props */
import React from 'react';
import './style.css';
import { eduZ, eduZ2 } from '../../assets';
// import { Card } from '../../components';

const Home = () => {
  return (
    <div className="card" id="home">
      <div className="container">
        <div className="leftContent">
          <img alt="IM" className="img-edu" src={eduZ} />
        </div>
        <div className="rightContent">
          <img alt="IM" className="img-edu" src={eduZ2} />
        </div>
      </div>
    </div>
  );
};

export default Home;
