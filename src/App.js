// Third Party
import React, { Component } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

// Assets
import './assets/Animations.css';

// Components
import Header from './components/header/Header';
import Search from './components/search/Search';
import WeatherTable from './components/weather-table/WeatherTable';
import Footer from './components/footer/Footer';
import AlertList from './components/alert-list/AlertList';
import SearchLoader from './components/search-loader/SearchLoader';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      data: [],
      city: "",
      zip: "",
      country: "US",
      units: "imperial",
      alerts: []
    };

    this.getWeather = this.getWeather.bind(this);
    this.setValue = this.setValue.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.setUnits = this.setUnits.bind(this);
  }

  getWeather(e) {
    e.preventDefault();
    const zip = this.state.zip;

    if (zip === "") {
      this.addAlert("Zip code required");
      return;
    }

    const country = this.state.country;
    const units = this.state.units;
    const key = "396295ac4fa8d1ebfbd1229f7809fe56";
    const api = "https://api.openweathermap.org/data/2.5/forecast";
    const options = `?zip=${zip},${country}&units=${units}&appid=${key}`;
    const url = api + options;

    this.setState({ fetching: true });
    axios.get(url)
    .then(res => {
      this.setState({
        fetching: false,
        city: res.data.city.name,
        data: res.data.list
      });
    })
    .catch(err => {
      this.setState({ fetching: false });
      if (err.response && err.response.status === 404) {
        this.addAlert("No weather data found for that location");
      } else {
        this.addAlert("An internal error occured");
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

  resetSearch() {
    this.setState({
      fetching: false,
      data: []
    });
  }

  setUnits(units) {
    this.setState({
      units: units
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
          !this.state.fetching && this.state.data.length === 0 &&
          <Search
            country={this.state.country}
            zip={this.state.zip}
            units={this.state.units}
            onChange={this.setValue}
            onUnitChange={this.setUnits}
            onSubmit={this.getWeather}
          />
        }
        {
          this.state.fetching &&
          <SearchLoader />
        }
        {
          !this.state.fetching && this.state.data.length > 0 &&
          <WeatherTable
            city={this.state.city}
            data={this.state.data}
            units={this.state.units}
            onNewSearch={this.resetSearch}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
