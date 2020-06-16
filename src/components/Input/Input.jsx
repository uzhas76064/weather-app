import React from "react";
import styled from "styled-components";

const SearchBlock = styled.div`
    & input {
        width: 50%;
        padding: 5px 20px;
        border-radius: 3px;
        border: 1px solid;
        outline: none;
    }
    
    & button {
        padding: 5px 20px;
        margin-left: 5px;
        cursor: pointer;
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