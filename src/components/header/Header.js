// Third party
import React from 'react';

// Assets
import './Header.css';
import sun from '../../assets/img/sun.svg';
import cloud1 from '../../assets/img/cloud1.svg';
import cloud2 from '../../assets/img/cloud2.svg';


const Header = () => (
  <div className="header">
    <span className="header__sun-container">
      <img className="header__sun" src={sun} />
    </span>
    <img className="header__cloud header__cloud--1" src={cloud1} />
    <img className="header__cloud header__cloud--2" src={cloud2} />
    <h1 className="header__title">
      WeatherZip
    </h1>
  </div>
)

export default Header;