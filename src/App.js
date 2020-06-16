import React from 'react';
import styled from "styled-components";
import Weather from "./components/Weather/Weather";
import WeatherAPI from "../src/services/WeatherAPI";
import './App.css';
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";

const Container = styled.div`
  max-width: 800px;
  margin 0 auto;
  text-align: center;
`;

export default class App extends React.Component{
    weather = new WeatherAPI();

    state = {
        visible: false,
        clouds: null,
        cityName: null,
        temp: null,
        windSpeed: null
    };

    findForecast = (e) => {
        e.preventDefault();
        let data = this.weather.getWeather(e);

        data.then(response => response)
            .then(d => {
                console.log(d)
                this.setState({
                    visible: !this.state.visible,
                    clouds: d.clouds.all,
                    cityName: d.name,
                    temp: d.main.temp,
                    windSpeed: d.wind.speed
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
        return (
            <div className="App">
                <Container>
                    <h1>Погода!</h1>
                    <Weather/>
                    <Input inputCity={this.inputCity} findForecast={this.findForecast}/>
                    {this.state.visible ?  <Card cityName={this.state.cityName} windSpeed={this.state.windSpeed} clouds={this.state.clouds}/> : null}
                </Container>
            </div>
        );
    }
};
