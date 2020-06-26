import React from "react";
import styled from "styled-components";
import {SearchButton} from "../Input/Input"

const Button = styled(SearchButton)`
    margin-top: 25px;
    padding: 10px 20px;
    background: #d32f2f;
    display: flex;
    align-items: center;
`;

const OpenButton = () => {
    return (
        <Button><img width="30px" src="https://img.icons8.com/offices/50/000000/gas-mask.png" alt=""/>Индекс загрязнения</Button>
    );
};

export default OpenButton;