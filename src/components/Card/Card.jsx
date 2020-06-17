import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 56%;
    margin: auto;
    margin-top: 50px;
    color: white;
    padding: 50px;
    border-radius: 5px;
    text-align: start;
    box-shadow: 0px 0px 5px 1px rgba(61,61,61,1);
    background: #3F51B5;
    font-family: 'Ubuntu', sans-serif;
    
    & h3 {
        text-align: center;
    }
    
    & div {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
    }
    
    & div span {
        font-weight: 500;
    }
`;

const Weather = (props) => {
    return (
        <Card>
            <h3>Город: {props.cityName}</h3>
           <div>
               <p>Ветер: <span>{props.windSpeed}</span>м/с</p>
               <p>Облачность: <span>{props.clouds}</span>%</p>
           </div>
            <div>
                <p>Температура: <span>{props.temp} </span>&deg;C</p>
                <p>Влажность: <span>{props.humidity}</span>%</p>
            </div>
            <div>
                <p>Давление: <span>{Math.floor(props.pressure * 0.75)} </span>мм.рт.ст</p>
                <p>Темп. ветра: <span>{props.windDeg} </span>&deg;C</p>
            </div>
        </Card>
    );
};

export default Weather;