import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const WeatherCards = styled.div`
    
`;

const Weather = (props) => {
    return (
        <WeatherCards>
            <Card cityName={props.cityName} windSpeed={props.windSpeed} icon={props.icon} clouds={props.clouds}/>
        </WeatherCards>
    );
};

export default Weather;