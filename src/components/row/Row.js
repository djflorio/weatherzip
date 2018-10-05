// Third party
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Assets
import './Row.css';

// Components
import Thermometer from '../thermometer/Thermometer';


const Row = (props) => {

  const day = moment(props.time.split(' ')[0], 'YYYY-MM-DD');
  const parsedDay = day.format('ddd, MMM Do');
  const time = moment(props.time.split(' ')[1], 'HH:mm:ss');
  const parsedTime = time.format('h:mm a');
  
  return (
    <tr className="row">
      <td>
        <div className="row__date">
          <p className="row__date-day">
            {parsedDay}
          </p>
          <p className="row__date-time">
            {parsedTime}
          </p>
        </div>
      </td>
      <td>
        <img className="row__icon" src={props.icon} alt="weather icon" />
      </td>
      <td>
        <p className="row__description">{ props.weather }</p>
      </td>
      <td>
        <Thermometer units={props.units} temp={props.temp} />
      </td>
    </tr>
  );
};

Row.propTypes = {
  units: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

export default Row;