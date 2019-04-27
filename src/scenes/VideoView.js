import React, { Component } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import qs from 'query-string';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

import Topics from '../components/Topics';


class VideoCaption extends Component {
	constructor (props) {
		super(props);
		this.state = {
			videoid: '',
			title: '',
			description: '',
			tags: [],
			segments: [],
		}
	}
	
	componentDidMount () {
		const { videoid } = this.props.match.params
		const search = qs.parse(this.props.location.search).search
		this.setState({videoid: videoid})
		// Get the video metadata
		let appcomponent = this;
        axios.get('https://api.studyfast.xyz/api/v1/video/' + videoid + '?search=' + search).then(response => {
			const data = response.data
			let videoData = data.items[0].snippet
			let topicsegments = data.topics.segments
			appcomponent.setState({
				title: videoData.title, 
				description: videoData.description, 
				tags: videoData.tags,
				segments: topicsegments
			})
        })
    }

	render() {
	    const opts = {
			width: '100%',
			height: '450px',
	      	playerVars: { // https://developers.google.com/youtube/player_parameters
	        	autoplay: 1
	    	}
	    };
	 
	    return (
			<Flex
			justifyContent='center'
			flexWrap='wrap'>
				<VideoBox>
					<Text
						fontSize={[ 3, 4 ]}
						fontWeight='bold'>
						{this.state.title}
					</Text>
						<YouTube
							videoId={this.state.videoid}
							opts={opts}
							onReady={this._onReady}
						/>
					<Topics segments={this.state.segments}></Topics>
					<Text fontWeight='bold' fontSize={[ 2 ]} my={2}>Description</Text>
					<Text my={1} >{this.state.description}</Text>
				</VideoBox>
			</Flex>
	    );
	}

	_onReady(event) {
	    // access to player in all event handlers via event.target
	    event.target.pauseVideo();
	}
}

const VideoBox = styled.div`
	max-width: 800px;
	flex: 1;
`

export default VideoCaption;