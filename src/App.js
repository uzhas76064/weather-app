import React from 'react';
import styled from "styled-components";
import Weather from "./components/Weather/Weather";
import './App.css';
import WeatherAPI from "../src/services/WeatherAPI";

const Container = styled.div`
  max-width: 800px;
  margin 0 auto;
  text-align: center;
`;

export default class App extends React.Component {
    weather = new WeatherAPI();

    state = {
        name: null,
        wind: null,
        icon: null,
        clouds: null
    };

    updateWeather = () => {
      this.weather.getWeather("Berlin", "metric")
          .then(data => {
              this.setState({
                  name: data.name,
                  wind: data.wind.speed,
                  icon: data.weather.icon,
                  clouds: data.clouds.all
              });
          });
    };

    componentDidMount() {
        this.updateWeather();
    }

    render() {
        const { name, wind, icon, clouds } = this.state;

        return (
            <div className="App">
                <Container>
                    <Weather cityName={name} windSpeed={wind} icon={icon} clouds={clouds}/>
                </Container>
            </div>
        );
    }
}