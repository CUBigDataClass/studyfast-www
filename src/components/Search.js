import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

export class Search extends Component {
  state = {
    search: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.title);
    this.setState({  });
  }

  onChange = (e) => this.setState({ search: e.target.value });

  componentDidMount() {
    console.log("here")
    axios.get('https://api.studyfast.xyz/api/v1/search?search=academy').then(function (response) {
      console.log(response);
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto'}}>
        <input 
          type="text" 
          name="title" 
          placeholder="Enter Keyword..." 
          style={{ flex:'10', padding: '5px', fontSize: '17px', marginBottom: '25px'}}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Search" 
          className="btn"
          style={{flex: '1', fontSize: '17px', width: '35%', margin: 'auto'}}
        />
      </form>
    )
  }
}

// PropTypes
Search.propTypes = {
  search: PropTypes.func.isRequired
}

export default Search;
