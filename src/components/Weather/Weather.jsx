import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const WeatherCards = styled.div`
    border: 2px solid;
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Weather = (props) => {
    return (
        <WeatherCards>
            <h2>Крупные города</h2>
            <Cards>
                <Card cityName={props.cityName} windSpeed={props.windSpeed} icon={props.icon} clouds={props.clouds}/>
                <Card cityName={props.cityName} windSpeed={props.windSpeed} icon={props.icon} clouds={props.clouds}/>
                <Card cityName={props.cityName} windSpeed={props.windSpeed} icon={props.icon} clouds={props.clouds}/>
            </Cards>
        </WeatherCards>
    );
};

export default Weather;