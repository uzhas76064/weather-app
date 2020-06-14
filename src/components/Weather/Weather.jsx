import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import WeatherAPI from "../../services/WeatherAPI";

const WeatherCards = styled.div`
    border: 2px solid;
    margin-bottom: 50px;
    padding: 20px;
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default class Weather extends React.Component{
    weather = new WeatherAPI();

    state = {
        name: null,
        wind: null,
        icon: null,
        clouds: null
    };

    updateWeather = () => {
        this.weather.getCitiesWeather()
            .then(data => data.map(item => item));
    };

    componentDidMount() {
        this.updateWeather();
    }

    render() {
        const { name, wind, icon, clouds } = this.state;

        return (
            <WeatherCards>
                <h2>Крупные города</h2>
                <Cards>

                </Cards>
            </WeatherCards>
        );
    }
}
