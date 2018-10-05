// Third party
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Assets
import './WeatherData.css';


const Thermometer = (props) => {

  const max = props.units === "imperial" ? 100 : 38;
  let width = (props.temp / max) * 100;
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


const Entry = (props) => {

  const day = moment(props.time.split(' ')[0], 'YYYY-MM-DD');
  const parsedDay = day.format('ddd, MMM Do');
  const time = moment(props.time.split(' ')[1], 'HH:mm:ss');
  const parsedTime = time.format('h:mm a');
  
  return (
    <tr className="entry">
      <td>
        <div className="entry__date">
          <p className="entry__date-day">
            {parsedDay}
          </p>
          <p className="entry__date-time">
            {parsedTime}
          </p>
        </div>
      </td>
      <td>
        <img className="entry__icon" src={props.icon} alt="weather icon" />
      </td>
      <td>
        <p className="entry__description">{ props.weather }</p>
      </td>
      <td>
        <Thermometer units="imperial" temp={props.temp} />
      </td>
    </tr>
  );
};

const WeatherData = (props) => (
  <div className="weather-data">
    <p className="weather-data__header">
      5-Day Forecast for {props.city}
    </p>
    <button
      className="weather-data__new"
      onClick={props.onNewSearch}>
      Search Again
    </button>
    <table className="weather-data__list">
      <tbody>
      {
        props.data.map(entry => (
          <Entry
            key={entry.dt}
            icon={"http://openweathermap.org/img/w/" + entry.weather[0].icon + ".png"}
            time={entry.dt_txt}
            weather={entry.weather[0].description}
            temp={entry.main.temp}
          />
        ))
      }
      </tbody>
    </table>
  </div>
);

Thermometer.propTypes = {
  units: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

Entry.propTypes = {
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

WeatherData.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onNewSearch: PropTypes.func.isRequired
}

export default WeatherData;