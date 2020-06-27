import React from "react";
import styled from "styled-components";

const Bottom = styled.footer`
    color: white;
    font-size: larger;
    font-family: 'Roboto', sans-serif;
    & a {
        color: #66BB6A;
    }
`;

const Footer = () => {
    return (
        <Bottom>
            <div>
                Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a>
            </div>
        </Bottom>
    );
};

export default Footer;