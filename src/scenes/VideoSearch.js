import React, { Component } from 'react';
import Videos from '../components/Videos';
import Search from '../components/Search';
import axios from 'axios';
import Typist from 'react-typist';

import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

import { Text, Flex } from 'rebass';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class VideoSearch extends Component {

	constructor (props) {
		super(props);
		this.state = {
            videos: [],
            title: '',
            loading: false
		}
    }
    
    search = (title) => {
        // Caches the current component so we can use it in the callback to the network call
        let appcomponent = this;
        appcomponent.setState({ loading: true })
        axios.get('https://api.studyfast.xyz/api/v1/list?search=' + title).then(response => {
          appcomponent.setState({ videos: response.data, title: title, loading: false});
        })
    }

	render() {
	    return (
            <div>
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
                <div className='sweet-loading'>
                    <PacmanLoader
                        css={override}
                        sizeUnit={"px"}
                        size={50}
                        color={'red'}
                        loading={this.state.loading}
                    />
                </div> 
            </div>
	    );
	}
}

export default VideoSearch;