import React from "react";

const TemperatureParam = (props) => {
    return (
        <div>
            <img src="https://img.icons8.com/ultraviolet/40/000000/temperature-sensitive.png" alt="Temperature"/>
            <p>Температура: <span>{props.temp} </span>&deg;C</p>
        </div>
    );
};

export default TemperatureParam;