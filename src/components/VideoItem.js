import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class VideoItem extends Component {
  	getStyle = () => {
    	return {
	      padding: '10px',
	      background: 'white',
	      borderBottom: '1px #ccc solid',
	      width: '80%',
	      margin: '0 auto',
	      display: 'flex',
	      flexDirection: 'row',
	      justifyContent: 'space-between',
    	}
  	}

  	render() {
    	return (
      		<div style={this.getStyle()}>
        		<a href={this.props.link} >
        			<img src={this.props.thumbnail}/>
        		</a>
        		<p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          			{ this.props.title }
        		</p>
      		</div>
    	)
  	}
}

// PropTypes
VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

// const btnStyle = {
//   background: '#ff0000',
//   color: '#fff',
//   border: 'none',
//   padding: '5px 9px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right'
// }

export default VideoItem