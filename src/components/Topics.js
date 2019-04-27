import React, { Component } from 'react';
import styled from 'styled-components';

class Topics extends Component {

    CreateStripes = (segments) => {
        console.log(segments)
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

    render() {
        return <VizContainer>{ this.CreateStripes(this.props.segments) }</VizContainer>
    }
}

const Segment = styled.div`
    background: ${props => props.activeColor || "white"};
    flex: 1;
`

const VizContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    border: 1px black solid;
`

export default Topics;