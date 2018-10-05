// Third party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './UnitPicker.css';


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

UnitPicker.propTypes = {
  units: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default UnitPicker;