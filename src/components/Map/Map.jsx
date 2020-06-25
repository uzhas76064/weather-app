import React from "react";
import styled from "styled-components";

const Frame = styled.div`
    text-align: center;
    
    & iframe {
        width: 50%;
        height: 500px;
        box-shadow: 0px 0px 5px 1px rgba(61,61,61,1);
    }
`;

const Map = (props) => {
    let url = "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=clouds&lat=69.5959&lon=-9.6680&zoom=3";

    return (
        <Frame>
            <iframe src={url} title="Map" scrolling="no" frameBorder="0">iframe не поддерживается вашим браузером
            </iframe>
        </Frame>
    );
};

export default Map;