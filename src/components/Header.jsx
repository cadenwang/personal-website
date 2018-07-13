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
    top: 96%;
    position: absolute;
    transition: 0.5s ease;
`

const Linked = styled(Link)`
  font-size: calc(5px + 0.4vw);
  color: white;
  padding: 2vh 0;
  /* white-space: nowrap; */
  font-family: Helvetica, Arial;
  text-decoration: none;
  position: relative;
  transition: 0.5s ease;
  &:hover {
    text-shadow: 0px -1px 0px rgba(255,255,255,0.5), 0 0 5px rgba(255,255,255,0.8),0 -1px 1px rgba(255,255,255,0.5);
  }
`

const Div = styled.div`
  position: relative;
  margin: none;
  text-align: center;
  display: inline-block;
  width: 9%;
  padding: 15px 0;
  transition: 0.5s ease;
  border-left: 1px solid rgba(255,255,255,0.09);

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
        <Div id='one'>
          <Linked to="/">HOME</Linked>
        </Div>

        <Div id='two'>
          <Linked to="/AboutMe">ABOUT ME</Linked>
        </Div>

        <Div id='three'>
          <Linked to="/Resume">RESUME</Linked>
        </Div>

        <Div id='four'>
          <Linked to="/ShowerThoughts">SHOWER THOUGHTS</Linked>
        </Div>

        <Div id='five'>
          <Linked to="/Contact">CONTACT</Linked>
        </Div>
        <Underline></Underline>
      </Container>
    );
  }
}