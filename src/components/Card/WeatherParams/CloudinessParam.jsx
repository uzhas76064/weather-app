import React from "react";

const CloudinessParam = (props) => {
    return (
        <div>
            <img src="https://img.icons8.com/cotton/64/000000/clouds.png" alt="Cloudiness"/>
            <p>Облачность: <span>{props.cloudiness}</span>%</p>
        </div>
    );
};

export default CloudinessParam;