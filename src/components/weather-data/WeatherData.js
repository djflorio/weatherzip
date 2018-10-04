// Third party
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Assets
import './WeatherData.css';

const Entry = (props) => {

  const day = moment(props.time.split(' ')[0], 'YYYY-MM-DD');
  const parsedDay = day.format('ddd, MMM Do');
  const time = moment(props.time.split(' ')[1], 'HH:mm:ss');
  const parsedTime = time.format('h:mm a');
  console.log(parsedTime);
  
  return (
    <li className="entry">
      <div className="entry__date">
        <p className="entry__date-day">
          {parsedDay}
        </p>
        <p className="entry__date-time">
          {parsedTime}
        </p>
      </div>
      <img className="entry__icon" src={props.icon} alt="weather icon" />
      { props.weather }
    </li>
  );
};

const WeatherData = (props) => (
  <div className="weather-data">
    <ul className="weather-data__list">
      {
        props.data.map(entry => (
          <Entry
            key={entry.dt}
            icon={"http://openweathermap.org/img/w/" + entry.weather[0].icon + ".png"}
            time={entry.dt_txt}
            weather={entry.weather[0].main}
            temp={entry.main.temp}
            tempMin={entry.main.temp_min}
            tempMax={entry.main.temp_max}
          />
        ))
      }
    </ul>
  </div>
);

Entry.propTypes = {
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired
}

WeatherData.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default WeatherData;