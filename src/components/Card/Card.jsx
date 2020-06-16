import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 25%;
    margin: auto;
    margin-top: 50px;
`;

const Weather = (props) => {
    return (
        <Card>
            <h3>Город:{props.cityName}</h3>
            <div>Ветер:{props.windSpeed}</div>
            <div>Облачность:{props.clouds}%</div>
        </Card>
    );
};

export default Weather;