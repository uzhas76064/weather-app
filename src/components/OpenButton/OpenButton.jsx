import React from "react";
import AirQuality from "../Card/AirQuality/AirQuality";
import classes from "../Card/OpenButton.module.css";

const OpenButton = (props) => {
    let aqi = props.aqiOpened ? <AirQuality aqi={props.aqi} station={props.station}/> : null;
    return (
        <>
            <button className={classes.aqi} onClick={props.openAQI}>
                <img width="30px" src="https://img.icons8.com/offices/50/000000/gas-mask.png" alt=""/>Индекс загрязнения
            </button>
            { aqi }
        </>
    );
};

export default OpenButton;
