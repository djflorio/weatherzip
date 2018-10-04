// Third Party
import React, { Component } from 'react';
import axios from 'axios';

// Assets
import './assets/Animations.css';
import './App.css';

// Components
import Header from './parts/header/Header';


class App extends Component {

  constructor(props) {
    super(props);

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    //this.getWeather(10025);
  }

  getWeather(zip) {
    const key = "396295ac4fa8d1ebfbd1229f7809fe56";
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&appid=${key}`;
    axios.get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
