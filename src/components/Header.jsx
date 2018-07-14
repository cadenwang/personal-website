import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 0.25vh 0;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.4);
  margin: none;
  z-index: 10;
  position: fixed;
  width: 100%;
`

const Underline = styled.div`
    background: rgba(100,100,200,0);
    top: 96.5%;
    position: absolute;
    transition: 0.5s ease;
`

const Button = styled.button`
  display: inline-block;
  position: relative;
  border: none;
  background: none;
  margin: none;
  font-family: Helvetica, Arial;
  text-align: center;
  width: 9%;
  border-left: 1px solid rgba(255,255,255,0.09);
  font-size: calc(5px + 0.4vw);
  outline: none;
  color: white;
  padding: 1.5vh 0;
  /* white-space: nowrap; */
  text-decoration: none;
  transition: 0.5s ease;
  &:hover {
    text-shadow: 0px -1px 0px rgba(255,255,255,0.5), 0 0 5px rgba(255,255,255,0.8),0 -1px 1px rgba(255,255,255,0.5);
  }
  &#one:hover ~ ${Underline} {
    left: 55vw;
    width: 9vw;
    height: 2px;
    background: white;
    box-shadow: 0 0 15px rgba(255,255,255,1);
  }
  &#two:hover ~ ${Underline} {
    left: 64vw;
    width: 9vw;
    height: 2px;
    background: #ffc4f5;
    box-shadow: 0 0 15px rgba(255,255,255,1);
  }
  &#three:hover ~ ${Underline} {
    left: 73vw;
    width: 9vw;
    height: 2px;
    background: #99eeff;
    box-shadow: 0 0 15px rgba(255,255,255,1);
  }
  &#four:hover ~ ${Underline} {
    left: 82vw;
    width: 9vw;
    height: 2px;
    background: #92fcde;
    box-shadow: 0 0 15px rgba(255,255,255,1);
  }
  &#five:hover ~ ${Underline} {
    left: 91vw;
    width: 9vw;
    height: 2px;
    background: #debcff;
    box-shadow: 0 0 15px rgba(255,255,255,1);
  }
`

export default class Header extends Component {
  render() {
    return (
      <Container>
          <Button id='one' onClick={(e) => this.props.changeFullpageSlide(0)}>HOME</Button>
          <Button id='two' onClick={(e) => this.props.changeFullpageSlide(1)}>ABOUT ME</Button>
          <Button id='three' onClick={(e) => this.props.changeFullpageSlide(2)}>RESUME</Button>
          <Button id='four' onClick={(e) => this.props.changeFullpageSlide(3)}>SHOWER THOUGHTS</Button>
          <Button id='five' onClick={(e) => this.props.changeFullpageSlide(4)}>CONTACT</Button>
        <Underline></Underline>
      </Container>
    );
  }
}