import React from "react";
import styled from "styled-components";

const SearchBlock = styled.div`
    & input {
        width: 50%;
        box-shadow: 0px 0px 5px -1px rgba(61,61,61,1);
        padding: 5px 20px;
        border-radius: 3px;
        border: 1px solid;
        outline: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        border: none;
        font-size: 1rem;
    }
    
    & button {
        padding: 5px 20px;
        margin-left: 5px;
        cursor: pointer;
        box-shadow: 0px 0px 5px -1px rgba(61,61,61,1);
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        background: #2196F3;
        outline: none;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
    }
`;

const Input = (props) => {
    return (
        <SearchBlock>
            <form onSubmit={props.findForecast}>
                <input name="city" onChange={props.inputCity} type="text" required={true} placeholder="Введите название города"/>
                <button>Найти</button>
            </form>
        </SearchBlock>
    );
};

export default Input;