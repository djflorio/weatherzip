// Third Party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './AlertList.css';

// Components
import Alert from '../alert/Alert';


const AlertList = (props) => (
  <ul className="alert-list">
    {
      props.alerts.map(a => (
        <Alert
          key={a.id}
          alert={a}
          onRemove={props.onRemove}
        />
      ))
    }
  </ul>
);

AlertList.propTypes = {
  alerts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default AlertList;