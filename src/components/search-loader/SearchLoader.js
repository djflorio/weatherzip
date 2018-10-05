// Third Party
import React from 'react';

// Assets
import './SearchLoader.css';

// Components
import { HourGlass } from '../spinners/Spinners';


const SearchLoader =() => (
  <div className="search-loader">
    <HourGlass />
    <p className="search-loader__text">Getting your forecast</p>
  </div>
);

export default SearchLoader;