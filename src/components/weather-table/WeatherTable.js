// Third party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './WeatherTable.css';

// Components
import Row from '../row/Row';


const WeatherTable = (props) => (
  <div className="weather-table">
    <p className="weather-table__header">
      5-Day Forecast for {props.city}
    </p>
    <button
      className="weather-table__new"
      onClick={props.onNewSearch}>
      Search Again
    </button>
    <table className="weather-table__list">
      <tbody>
      {
        props.data.map(row => (
          <Row
            key={row.dt}
            icon={"http://openweathermap.org/img/w/" + row.weather[0].icon + ".png"}
            units={props.units}
            time={row.dt_txt}
            weather={row.weather[0].description}
            temp={row.main.temp}
          />
        ))
      }
      </tbody>
    </table>
  </div>
);

WeatherTable.propTypes = {
  city: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onNewSearch: PropTypes.func.isRequired
}

export default WeatherTable;