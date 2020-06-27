import React from "react";
import styled, {keyframes} from "styled-components";
import wind from "../../assets/wind.svg";

const rotate = keyframes`
    100% {
        transform: rotate(-360deg);
    }
`;

const float = keyframes`
    0%, 100% {
        transform: translate(0);
    }
    
    50% {
        transform: translate(50%);
    }
    
    75% {
        transform: translate(75%); 
    }
`;

const pulsing = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    
    50% {
        transform: scale(1.1);
    }
`;

const Rotation = styled.div`
    animation: ${rotate};
    animation-duration: 1.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
`;

const Pulsation = styled.div`
    animation-name: ${pulsing};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; 
    animation-fill-mode: forwards;
`;

const Floating = styled.div`
    display: inline-block;
    position: absolute;
    margin: 10px;
    animation: ${float} 5s ease-in-out 0s infinite alternate forwards;
}`;

export const Wind = () => {
    return <Rotation><img src={wind} alt="" style={{width: "4em", height: "4em", padding: "10px"}}/></Rotation>
};

const AnimationLayer = () => {
    return (
        <div style={{marginBottom: "250px"}}>
            <Floating>
                <img style={{position: "relative", right: "19em", top: "2em"}} src="https://img.icons8.com/dusk/64/000000/cloud.png" alt="cloud"/>
            </Floating>
            <Floating>
                <img style={{position: "relative", right: "7em", left: "10em"}} src="https://img.icons8.com/dusk/64/000000/cloud.png" alt="cloud"/>
            </Floating>
            <Pulsation>
                <img style={{position: "relative", right: "2em", top: "6em"}} src="https://img.icons8.com/dusk/64/000000/cloud.png" alt="cloud"/>
            </Pulsation>
        </div>
    );
};

export default AnimationLayer;