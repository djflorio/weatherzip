// Third Party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './Alerts.css';


class Alert extends React.Component {

  componentDidMount() {
    setInterval(() => {
      this.props.onRemove(this.props.alert.id);
    }, 4000);
  }

  render() {
    return (
      <li
        className="alert"
        onClick={() => this.props.onRemove(this.props.alert.id)}>
        {
          this.props.alert.message
        }
      </li>
    );
  }
}

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

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default AlertList;