import React, { Component } from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  background-color: #99eeff;
  text-align: center;
  padding: 275px 0 275px 0;
`

const Text = styled.div`
  font-size: 100px;
  font-family: helvetica, georgia;
  color: white;
  text-align: center;
`

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <ResumeContainer>
        <Text>
        Resume.
        </Text>
      </ResumeContainer>
    );
  }
}


