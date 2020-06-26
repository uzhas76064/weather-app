import React from 'react';
import styled from "styled-components";
import WeatherService from "./services/WeatherService";
import Input from "./components/Input/Input";
import Weather from "./components/Card/Card";
import AnimationLayer from "./components/AnimationLayer/AnimationLayer";
import {Wind} from "./components/AnimationLayer/AnimationLayer";

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
  }
`;

export default class App extends React.Component {
    weather = new WeatherService();

    state = {
        loading: false,
        visible: false,
        title: null,
        weather: {}
    };

    changeState = (data) => {
        data.then(response => response)
            .then(d => {
                console.log(d);
                this.setState({
                    loading: false,
                    visible: true,
                    weather: {
                        clouds: d.clouds.all,
                        cityName: d.name,
                        temp: d.main.temp,
                        windSpeed: d.wind.speed,
                        visibility: d.visibility,
                        pressure: d.main.pressure,
                        humidity: d.main.humidity,
                        icon: d.weather[0].icon
                    }
                })
            })
    };

    setDefaultWeather = () => {
        let data = this.weather.getDefaultWeather();
        this.changeState(data);
    };

    findForecast = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        let data = this.weather.getWeather(e);

        this.changeState(data);
    };

    inputCity = (e) => {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    };

    componentDidMount() {
        this.setState({title: this.weather.setRandomTitle()});
        this.setDefaultWeather();
    }

    render() {
        let foundCity = this.state.visible && this.state.loading === false ?
            <Weather icon={this.state.weather.icon}
                     visibility={this.state.weather.visibility}
                     humidity={this.state.weather.humidity}
                     pressure={this.state.weather.pressure}
                     temp={this.state.weather.temp}
                     cityName={this.state.weather.cityName}
                     windSpeed={this.state.weather.windSpeed}
                     clouds={this.state.weather.clouds}/> : <h3 style={{color: "white"}}>Загрузка...</h3>;
        return (
            <div className="App">
                <Container>
                    <Wind/>
                    <h1>{this.state.title}</h1>
                    <Input inputCity={this.inputCity} findForecast={this.findForecast}/>
                    {foundCity}
                    <AnimationLayer/>
                </Container>

            </div>
        );
    }
};
