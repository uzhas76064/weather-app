import React from "react";
import styled from "styled-components";
import NameParam from "./WeatherParams/NameParam";
import WindParam from "./WeatherParams/WindParam";
import CloudinessParam from "./WeatherParams/CloudinessParam";
import VisibilityParam from "./WeatherParams/VisibilityParam";
import HumidityParam from "./WeatherParams/HumidityParam";
import TemperatureParam from "./WeatherParams/TemperatureParam";
import PressureParam from "./WeatherParams/PressureParam";

const Card = styled.div`
    width: 64%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
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
               <NameParam cityName={props.cityName} icon={icon}/>
           </div>
            <div>
               <WindParam windSpeed={props.windSpeed}/>
              <TemperatureParam temp={props.temp}/>
            </div>
            <div>
               <VisibilityParam visibility={props.visibility}/>
               <HumidityParam humidity={props.humidity}/>
            </div>
            <div>
                <PressureParam pressure={props.pressure}/>
                <CloudinessParam cloudiness={props.clouds}/>
            </div>
        </Card>
    );
};

export default Weather;