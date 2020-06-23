import React from "react";

const HumidityParam = (props) => {
    return (
        <div>
            <img src="https://img.icons8.com/ultraviolet/48/000000/wet.png" alt="Humidity"/>
            <p>Влажность: <span>{props.humidity}</span>%</p>
        </div>
    );
};

export default HumidityParam;