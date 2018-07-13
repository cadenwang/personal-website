import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import { Fullpage, fullPageOptions } from './Fullpage.jsx';

const topNavStyle = {
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  cursor: 'pointer',
  // zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  top: '0px'
};
export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
        <Fullpage {...fullPageOptions}>
          <Header />
        </Fullpage> 
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
        </Switch> */}
      </div>
      </Router>
      </div>
    );
  }
}

