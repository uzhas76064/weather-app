import React from "react";

const WindParam = (props) => {
    return (
        <div>
            <img src="https://img.icons8.com/dusk/64/000000/wind.png" alt="Wind speed"/>
            <p> Ветер: <span>{props.windSpeed}</span> м/с</p>
        </div>
    );
};

export default WindParam;