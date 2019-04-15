import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import VideoDisplay from './VideoDisplay';
//import axios from 'axios';

export class Search extends Component {
  state = {
    title: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ title: e.target.value });


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
          style={{flex: '1', fontSize: '17px', width: '35%', margin: 'auto', marginBottom: '20px'}}
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
