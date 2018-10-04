// Third Party
import React, { Component } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

// Assets
import './assets/Animations.css';
import './App.css';

// Components
import Header from './components/header/Header';
import Search from './components/search/Search';
import AlertList from './components/alerts/Alerts';
import { HourGlass } from './components/spinners/Spinners';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      zip: "",
      country: "US",
      alerts: []
    };

    this.getWeather = this.getWeather.bind(this);
    this.setValue = this.setValue.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }

  getWeather(e) {
    e.preventDefault();
    const zip = this.state.zip;

    if (zip === "") {
      this.addAlert("Zip code required");
      return;
    }

    const country = this.state.country;
    const key = "396295ac4fa8d1ebfbd1229f7809fe56";
    const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${country}&units=imperial&appid=${key}`;

    this.setState({ fetching: true });
    axios.get(url)
    .then(res => {
      this.setState({ fetching: false });
      console.log(res);
    })
    .catch(err => {
      this.setState({ fetching: false });
      if (err.response.status === 404) {
        this.addAlert("No weather data found for that location");
      }
    });
  }

  setValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addAlert(message) {
    const newAlerts = this.state.alerts.slice();
    const alert = {
      id: uniqid(),
      message: message
    };
    newAlerts.push(alert);
    this.setState({
      alerts: newAlerts
    });
  }

  removeAlert(id) {
    const newAlerts = this.state.alerts.slice();
    for (let i = 0; i < newAlerts.length; i++) {
      if (newAlerts[i].id === id) {
        newAlerts.splice(i, 1);
        break;
      }
    }
    this.setState({
      alerts: newAlerts
    });
  }

  render() {
    return (
      <div className="App">
        <AlertList
          alerts={this.state.alerts}
          onRemove={this.removeAlert}
        />
        <Header />
        {
          !this.state.fetching &&
          <Search
            country={this.state.country}
            zip={this.state.zip}
            onChange={this.setValue}
            onSubmit={this.getWeather}
          />
        }
        {
          this.state.fetching &&
          <div className="App__fetching">
            <HourGlass />
            <p className="App__fetching-text">Getting your forecast</p>
          </div>
        }
      </div>
    );
  }
}

export default App;
