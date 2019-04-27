import React, { Component } from 'react';
import VideoItem from './VideoItem';
import PropTypes from 'prop-types';

class Videos extends Component {

  	render() {
	    return this.props.videos.map((video) => (
					<VideoItem 
						video={video} 
						title={video.snippet.title} 
						thumbnail={video.snippet.thumbnails.medium.url} 
						link={"/video/" + video.id.videoId + '?search=' + this.props.search }
						/>
	    ));
  }
}

// PropTypes
Videos.propTypes = {
  videos: PropTypes.array.isRequired
}

export default Videos;