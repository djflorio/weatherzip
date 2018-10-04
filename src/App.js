// Third Party
import React, { Component } from 'react';
import axios from 'axios';

// Assets
import './assets/Animations.css';
import './App.css';

// Components
import Header from './components/header/Header';
import Search from './components/search/Search';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      zip: "",
      country: "US"
    };

    this.getWeather = this.getWeather.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    //this.getWeather(10025, 'us');
  }

  getWeather(zip, country) {
    const key = "396295ac4fa8d1ebfbd1229f7809fe56";
    const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${country}&units=imperial&appid=${key}`;
    axios.get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  setValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          country={this.state.country}
          zip={this.state.zip}
          onChange={this.setValue}
        />
      </div>
    );
  }
}

export default App;
