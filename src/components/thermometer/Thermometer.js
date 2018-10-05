// Third party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './Thermometer.css';


const Thermometer = (props) => {

  let width = props.temp;
  if (props.units === "metric") {
    // Convert scale to F for visual purposes only
    width = width * 1.8 + 32;
  }

  if (width < 0) {
    width = 0;
  } else if (width > 100) {
    width = 100;
  }

  const style = {
    width: width
  }

  return (
    <div className="thermometer">
      <span className="thermometer__temp">{Math.round(props.temp)}&deg;</span>
      <div className="thermometer__fill" style={style}></div>
    </div>
  );
}

Thermometer.propTypes = {
  units: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

export default Thermometer;