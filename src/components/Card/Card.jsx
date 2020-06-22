import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 64%;
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
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
    }
    
    & div img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
    
    & div:first-child {
        justify-content: center;
    }
    
    & div span {
        font-weight: 500;
    }
`;

const Weather = (props) => {
    const icon = `http://openweathermap.org/img/w/${props.icon}.png`;

    return (
        <Card>
            <div>
                <h3>Город: {props.cityName} </h3>
                <img src={icon} alt="Weather state"/>
            </div>
           <div>
               <div>
                   <img src="https://img.icons8.com/dusk/64/000000/wind.png" alt="Wind speed"/>
                   <p> Ветер: <span>{props.windSpeed}</span> м/с</p>
               </div>
               <div>
                   <img src="https://img.icons8.com/cotton/64/000000/clouds.png" alt="Cloudiness"/>
                   <p>Облачность: <span>{props.clouds}</span>%</p>
               </div>
           </div>
            <div>
                <div>
                    <img src="https://img.icons8.com/ultraviolet/40/000000/temperature-sensitive.png" alt="Temperature"/>
                    <p>Температура: <span>{props.temp} </span>&deg;C</p>
                </div>
               <div>
                   <img src="https://img.icons8.com/ultraviolet/48/000000/wet.png" alt="Humidity"/>
                   <p>Влажность: <span>{props.humidity}</span>%</p>
               </div>
            </div>
            <div>
                <div>
                    <img src="https://img.icons8.com/officexs/40/000000/pressure.png" alt="Pressure"/>
                    <p>Давление: <span>{Math.floor(props.pressure * 0.75)} </span>мм.рт.ст</p>
                </div>
                <div>
                    <img src="https://img.icons8.com/cotton/40/000000/telescope.png" alt="Visibility"/>
                    <p>Видимость <span>{props.windDeg /1000} </span> км.</p>
                </div>
            </div>
        </Card>
    );
};

export default Weather;