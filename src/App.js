import React from 'react';
import styled from "styled-components";
import WeatherService from "./services/WeatherService";
import Input from "./components/Input/Input";
import Weather from "./components/Card/Card";
import AnimationLayer from "./components/AnimationLayer/AnimationLayer";
import {Wind} from "./components/AnimationLayer/AnimationLayer";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  max-width: 800px;
  margin 0 auto;
  text-align: center;
  margin-bottom: 50px;
  
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
        inputValue: null,
        visible: false,
        aqiOpened: false,
        title: null,
        weather: {},
        aqi: {}
    };

    //Изменение состояния
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
                    },
                })
            })
            .catch(error => error.message)
    };

    //Открытие индекса качества воздуха
    openAQI = () => {
        let aqi = this.weather.getAQI(this.state.inputValue);
        this.setState({aqiOpened: !this.state.aqiOpened});

        aqi.then(response => response)
            .then(data => {
               this.setState({
                   aqi: {
                       aqi: data.data.aqi,
                       station: data.data.city.name
                   }
               })
            })
            .catch(error => error);

        console.log(aqi)
    };

    //Установка прогноза по умолчанию
    setDefaultWeather = () => {
        let data = this.weather.getDefaultWeather();
        this.changeState(data);
    };

    //Поиск прогноза по введеному городу
    findForecast = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        let data = this.weather.getWeather(e);

        this.changeState(data);
        this.setState({aqiOpened: false});
    };

    //Отслеживание события ввода названия города
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
                     clouds={this.state.weather.clouds}
                     aqiOpened={this.state.aqiOpened}
                     openAQI={this.openAQI}
                     aqi={this.state.aqi.aqi}
                     station={this.state.aqi.station}/> : <h3 style={{color: "white"}}>Загрузка...</h3>;
        return (
            <div className="App">
                <Container>
                    <Wind/>
                    <h1>{this.state.title}</h1>
                    <Input inputCity={this.inputCity} findForecast={this.findForecast}/>
                    {foundCity}
                    <AnimationLayer/>
                    <Footer/>
                </Container>
            </div>
        );
    }
};
