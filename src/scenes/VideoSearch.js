import React, { Component } from 'react';
import Videos from '../components/Videos';
import Search from '../components/Search';
import axios from 'axios';
import Typist from 'react-typist';

import { Text, Flex } from 'rebass';

class VideoSearch extends Component {

	constructor (props) {
		super(props);
		this.state = {
            videos: [],
            title: ''
		}
    }
    
    search = (title) => {
        // Caches the current component so we can use it in the callback to the network call
        let appcomponent = this;
        axios.get('https://api.studyfast.xyz/api/v1/list?search=' + title).then(response => {
          appcomponent.setState({ videos: response.data, title: title});
        })
    }

	render() {
	    return (
            <div>
                <Text p={3} fontSize={6} textAlign='center'>
                    <Typist avgTypingDelay={100}>
                        Search for Lectures
                        <Typist.Backspace count={8} delay={1000} />
                        Tutorials
                        <Typist.Backspace count={9} delay={1000} />
                        Educational Content
                    </Typist>
                </Text>
                <Search search={this.search}/>
                <Videos videos={this.state.videos} search={this.state.title} />
            </div>
	    );
	}
}

export default VideoSearch;