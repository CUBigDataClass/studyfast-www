import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Box, Link } from 'rebass';
import styled from 'styled-components';

import VideoView from './scenes/VideoView';
import SearchView from './scenes/VideoSearch';
import './App.css';

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Box p={3} fontSize={4} width={[ 1 ]} color='white' bg='Red' mb={4}>
              <HeaderLink href='/' color='white'>StudyFast</HeaderLink>
            </Box>
            <Route exact path="/" component={SearchView} />
            <Route path="/video/:videoid" component={VideoView} />
          </div>
        </div>
      </Router>
    );
  }
}

const HeaderLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: white !important;
  }
`


export default App;
