import React from 'react';
import styled from "styled-components";
import WeatherService from "./services/WeatherService";
import Input from "./components/Input/Input";
import Weather from "./components/Card/Card";
import Map from "./components/Map/Map";

const Container = styled.div`
  max-width: 800px;
  margin 0 auto;
  text-align: center;
  margin-bottom: 150px;
  
  & h1 {
    color: white;
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    font-style: italic;
    margin-top: 100px;
  }
`;

export default class App extends React.Component{
    weather = new WeatherService();

    state = {
        visible: false,
        clouds: null,
        cityName: null,
        temp: null,
        windSpeed: null,
        pressure: null,
        humidity: null,
        visibility: null,
        icon: null
    };

    findForecast = (e) => {
        e.preventDefault();
        let data = this.weather.getWeather(e);

        data.then(response => response)
            .then(d => {
                console.log(d);
                this.setState({
                    visible: true,
                    clouds: d.clouds.all,
                    cityName: d.name,
                    temp: d.main.temp,
                    windSpeed: d.wind.speed,
                    visibility: d.visibility,
                    pressure: d.main.pressure,
                    humidity: d.main.humidity,
                    icon: d.weather[0].icon
                })
            })
    };

    inputCity = (e) => {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    };

    render() {
        let title = this.weather.setRandomTitle();
<<<<<<< HEAD
        let foundCity = this.state.visible ?  <Weather icon={this.state.icon} visibility={this.state.visibility} humidity={this.state.humidity} pressure={this.state.pressure} temp={this.state.temp} cityName={this.state.cityName} windSpeed={this.state.windSpeed} clouds={this.state.clouds}/> : null;
=======
        let foundCity = this.state.visible ?  <Weather icon={this.state.icon} windDeg={this.state.visibility} humidity={this.state.humidity} pressure={this.state.pressure} temp={this.state.temp} cityName={this.state.cityName} windSpeed={this.state.windSpeed} clouds={this.state.clouds}/> : null;
>>>>>>> 5fc0f918c138e4f6d921127074b8aff2a71db918

        return (
            <div className="App">
                <Container>
                    <h1>{ title }</h1>
                    <Input inputCity={this.inputCity} findForecast={this.findForecast}/>
                    { foundCity }
                </Container>
                <Map/>
            </div>
        );
    }
};
