import React, { Component } from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  background-color: #92fcde;
  text-align: center;
  padding: 275px 0 275px 0;
`

const Text = styled.div`
  font-size: 100px;
  font-family: helvetica, georgia;
  color: white;
  text-align: center;
`

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BlogContainer>
        <Text>
        Blog.
        </Text>
      </BlogContainer>
    );
  }
}