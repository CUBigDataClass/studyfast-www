import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/Search';
import Header from './components/layout/header';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    result: null,
    videos: []
  }

  //constructor(props) {
  //   super(props)
  //   this.state = {
  //     result: null,
  //     videos: []
  //   }
  // }

  search = (title) => {
    console.log("here");
    axios.get('https://api.studyfast.xyz/api/v1/search?search=' + title).then(function (response) {
      console.log(response);
      this.setState({ result: response })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Search search={this.search}/>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
