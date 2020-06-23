import React from "react";

const NameParam = (props) => {
    return (
        <div>
            <h3>Город: {props.cityName} </h3>
            <img src={props.icon} alt="Weather state"/>
        </div>
    );
};

export default NameParam;