import React from 'react';
import styled from "styled-components";
import Weather from "./components/Weather/Weather";
import './App.css';
import Input from "./components/Input/Input";
import FindingWeather from "./components/FindingWeather/FindingWeather";

const Container = styled.div`
  max-width: 800px;
  margin 0 auto;
  text-align: center;
`;

export default class App extends React.Component{
    state = {
        visible: false,
        inputValue: ""
    };

    findForecast = (e) => {
        e.preventDefault();
      this.setState({visible: !this.state.visible})
    };

    inputCity = (e) => {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <Container>
                    <h1>Погода!</h1>
                    <Weather/>
                    <Input inputCity={this.inputCity} findForecast={this.findForecast}/>
                    {this.state.visible ?  <FindingWeather city={this.state.inputValue}/> : null}
                </Container>
            </div>
        );
    }
};
