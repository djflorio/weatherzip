// Third Party
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './Alert.css';


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

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Alert;