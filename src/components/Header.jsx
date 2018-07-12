import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  border-bottom: 1px solid white;
  padding-right: 20px;
  text-align: right;
  background-color: black;
  margin: none;
  padding: 20px;
`

const Linked = styled(Link)`
  margin: 0 10px 0 10px;
  padding: 20px;
  border: 1px solid transparent;
  font-size: 14px;
  color: white;
  font-family: Helvetica, Arial;
  background-color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;
  &:hover {
    color: #baffca;
    /* border-bottom: 1px solid #baffca; */
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #baffca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    color: #baffca;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Linked to="/">HOME</Linked>
        <Linked to="/AboutMe">ABOUT ME</Linked>
        <Linked to="/Resume">RESUME</Linked>
        <Linked to="/Blog">BLOG</Linked>
        <Linked to="/Contact">CONTACT</Linked>
      </Container>
    );
  }
}