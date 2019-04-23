import React, { Component } from 'react';
import YouTube from 'react-youtube';


class VideoCaption extends Component {
	constructor (props) {
		super(props);
		this.state = {
			videoid: ''
		}
	}
	
	componentDidMount () {
    	const { videoid } = this.props.match.params
    	console.log(videoid);
    	this.setState({videoid: videoid})

    }

	render() {
	    const opts = {
	      	height: '390',
	      	width: '640',
	      	playerVars: { // https://developers.google.com/youtube/player_parameters
	        	autoplay: 1
	    	}
	    };
	 
	    return (
	      	<YouTube
	        	videoId={this.state.videoid}
	        	opts={opts}
	        	onReady={this._onReady}
	      	/>
	    );
	}

	_onReady(event) {
	    // access to player in all event handlers via event.target
	    event.target.pauseVideo();
	}
}

export default VideoCaption;