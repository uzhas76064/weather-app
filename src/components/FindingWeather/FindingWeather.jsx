import React, {Component} from "react";
import styled from "styled-components";

const FoundWeather = styled.div`
    margin-top: 50px;
`;

export default class FindingWeather extends Component {
    render() {
        return (
            <FoundWeather>
                <p>{this.props.city}</p>
            </FoundWeather>
        );
    }
}