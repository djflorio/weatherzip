// Third party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './Search.css';
import countries from '../../assets/countrycodes';


const UnitPicker = (props) => (
  <div className="unit-picker">
    <div
      className={"unit-picker__choice" + (props.units === "imperial" ? " unit-picker__choice--active" : "")}
      onClick={() => props.onChange("imperial")}>
      &deg;F
    </div>
    <div className={"unit-picker__choice" + (props.units === "metric" ? " unit-picker__choice--active" : "")}
      onClick={() => props.onChange("metric")}>
      &deg;C
    </div>
  </div>
);

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

UnitPicker.propTypes = {
  units: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
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