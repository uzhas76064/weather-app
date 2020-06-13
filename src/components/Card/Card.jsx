import React from "react";
import styled from "styled-components";

const Card = styled.div`
    
`;

const Weather = (props) => {
    return (
        <Card>
            <h2>Город:{props.cityName}</h2>
            <div>Ветер:{props.windSpeed}</div>
            <div>Облачность(%):{props.clouds}</div>
        </Card>
    );
};

export default Weather;