import React, { Component } from 'react';
import Header from './Header.jsx';
import { Fullpage, fullPageOptions } from './Fullpage.jsx';
import styled from 'styled-components';
import FullpageReact from './FullpageReact.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <FullpageReact/>
      </div>
    );
  }
}

