import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Resume from './Resume.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import { Fullpage, fullPageOptions } from '../fullpage-react';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
        <Header />
        <Fullpage {...fullPageOptions} /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
      </Router>
      </div>
    );
  }
}

