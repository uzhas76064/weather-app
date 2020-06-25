import React from "react";
import styled, {keyframes} from "styled-components";

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

const Pulsing = styled.div`
    animation-name: ${pulsing};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; 
    animation-direction: normal;
    animation-fill-mode: forwards;
`;

const Floating = styled.div`
    display: inline-block;
    position: absolute;
    margin: 10px;
    animation: ${float} 5s ease-in-out 0s infinite alternate forwards;
}`;


const AnimationLayer = () => {
    return (
        <div>
            <Floating>
                <img style={{position: "relative", right: "19em", top: "2em"}} src="https://img.icons8.com/dusk/64/000000/cloud.png" alt="cloud"/>
            </Floating>
            <Floating>
                <img style={{position: "relative", right: "7em", left: "10em"}} src="https://img.icons8.com/dusk/64/000000/cloud.png" alt="cloud"/>
            </Floating>
            <Pulsing>
                <img style={{position: "relative", right: "2em", top: "6em"}} src="https://img.icons8.com/dusk/64/000000/cloud.png" alt="cloud"/>
            </Pulsing>
        </div>
    );
};

export default AnimationLayer;