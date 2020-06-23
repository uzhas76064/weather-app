import React from "react";

const PressureParam = (props) => {
    return (
        <div>
            <img src="https://img.icons8.com/officexs/40/000000/pressure.png" alt="Pressure"/>
            <p>Давление: <span>{Math.floor(props.pressure * 0.75)} </span>мм.рт.ст</p>
        </div>
    );
};

export default PressureParam;