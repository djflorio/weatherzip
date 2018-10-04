// Third party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './Search.css';
import countries from '../../assets/countrycodes';


const Search = (props) => {
  return (
    <div className="search">
      <div className="search__inner">
        <div className="search__country">
          <select
            className="search__country-select"
            onChange={props.onChange}
            name="country"
            value={props.country}>
            {
              countries.map(country => (
                <option key={country[0]} value={country[0]}>{country[1]}</option>
              ))
            }
          </select>
        </div>
        <input
          className="search__zip"
          name="zip"
          type="text"
          placeholder="Enter zip"
          value={props.zip}
          onChange={props.onChange}
        />
        <button onClick={props.onSubmit} className="search__submit">
          Get Forecast
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  country: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Search;