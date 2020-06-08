import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "",
    temp: "",
    wind: "",
    pressure: "",
    sunrise: "",
    sunset: "",
    error: false,
    city: ""
  };

  handleInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  // handleClick = e => {
  //   e.preventDefault();

  //   let API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=ea97bebf4e1040dd95fd7036f3ad668c&units=metric`;
  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("Nic z tego kolego");
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState(prevState => ({
  //         temp: data.main.temp,
  //         wind: data.wind.speed,
  //         pressure: data.main.pressure,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         error: false,
  //         city: prevState.value
  //       }))
  //     })
  //     .catch(error => {
  //       console.log("błąd!")
  //       this.setState(prevState => ({
  //         error: true,
  //         city: prevState.value
  //       }))
  //     })
  // };
  componentDidUpdate(prevState) {
    if (prevState.value !== this.state.value) {
      let API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=ea97bebf4e1040dd95fd7036f3ad668c&units=metric`;
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Nic z tego kolego");
        })
        .then(response => response.json())
        .then(data => {
          this.setState(prevState => ({
            temp: data.main.temp,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            error: false,
            city: prevState.value
          }))
        })
        .catch(error => {
          console.log("błąd!")
          this.setState(prevState => ({
            error: true,
            city: prevState.value
          }))
        })
    }
  }
  render() {
    return (
      <div className="App">
        <div></div>
        <Form
          value={this.state.value}
          change={this.handleInput}
          click={this.handleClick}
        />
        <Result results={this.state} />
      </div>
    );
  }
}

export default App;
