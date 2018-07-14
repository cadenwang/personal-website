import React, { Component } from 'react';
import styled from 'styled-components';

const GreetingText = styled.div`
  font-size: 60px;
  font-family: 'Robato', helvetica, georgia;
  color: white;
  background-color: black;
  text-align: center;
`

const HomeContainer = styled.div`
  background-color: black;
  text-align: center;
  padding: 275px 0 275px 0;
`

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <HomeContainer>
        <GreetingText>
          Hi, I'm Caden.
        </GreetingText>
      </HomeContainer>      
    );
  }
}