import React from "react";
import styled from "styled-components";

const Quality = styled.div`
    flex-wrap: wrap;
    
    & div.levels {
        display: block;
        
        & > div {
           padding-top: 1em;
        }
    }
`;

const AirQuality = (props) => {
    return (
        <Quality>
            <p>Индекс загрязненности: <span>{props.aqi}</span></p>
            <p>Имя станции: <span>{props.station}</span></p>
            <div className="levels">
                <small>Уровни опасности:</small>
               <div>
                   <span style={{width: "25px", height: "25px", backgroundColor: "#4CAF50", marginRight: "10px"}}></span>
                   <span style={{width: "25px", height: "25px", backgroundColor: "#FDD835", marginRight: "10px"}}></span>
                   <span style={{width: "25px", height: "25px", backgroundColor: "#FF8F00", marginRight: "10px"}}></span>
                   <span style={{width: "25px", height: "25px", backgroundColor: "#FF5722", marginRight: "10px"}}></span>
                   <span style={{width: "25px", height: "25px", backgroundColor: "#8E24AA", marginRight: "10px"}}></span>
                   <span style={{width: "25px", height: "25px", backgroundColor: "#DD2C00", marginRight: "10px"}}></span>
               </div>
            </div>
        </Quality>
    );
};

export default AirQuality;
