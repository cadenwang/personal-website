import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import { Fullpage, fullPageOptions } from './Fullpage.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
        <Fullpage {...fullPageOptions}>
          <Header />
        </Fullpage> 
      </div>
      </Router>
      </div>
    );
  }
}

