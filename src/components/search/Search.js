// Third party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './Search.css';
import countries from '../../assets/countrycodes';

// Components
import UnitPicker from '../unit-picker/UnitPicker';


const Search = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.onSubmit} className="search__form">
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
        <UnitPicker units={props.units} onChange={props.onUnitChange} />
        <input
          className="search__zip"
          name="zip"
          type="text"
          placeholder="Enter zip"
          value={props.zip}
          onChange={props.onChange}
        />
        <button type="submit" className="search__submit">
          Get Forecast
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  country: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUnitChange: PropTypes.func.isRequired
}

export default Search;