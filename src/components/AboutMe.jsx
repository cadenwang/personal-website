import React, { Component } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #ffc4f5;
  text-align: center;
  padding: 275px 0 275px 0;
`

const Text = styled.div`
  font-size: 100px;
  font-family: helvetica, georgia;
  color: white;
  text-align: center;
`


export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <AboutContainer>
        <Text>
        Penis.
        </Text>
      </AboutContainer>
    );
  }
}
