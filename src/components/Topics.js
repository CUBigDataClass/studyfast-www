import React, { Component } from 'react';
import styled from 'styled-components'

class Topics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            segments: []
        }
    }

    CreateStripes = (segments) => {
        let viz = [];
        for (let i = 0; i < segments.length; i++){
            if (segments[i] === true){
                viz.push(<Segment activeColor='red'></Segment>)
            } else {
                viz.push(<Segment></Segment>)
            }
        }
        return viz
    }

    componentDidMount() {
        let newsegments = this.props.segments;
        this.setState({ segments: newsegments });
    }

    render() {
        <VizContainer>{ this.CreateStripes(this.state.segments) }</VizContainer>
    }
}

const Segment = styled.div`
    background: ${props => props.activeColor || "white"};
    flex: 1;
`

const VizContainer = styled.div`
    height: 50px;
    width: 900px;
    display: flex;
`