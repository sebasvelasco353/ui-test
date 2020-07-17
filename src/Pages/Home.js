import React, { Component } from 'react'
import styled from 'styled-components';

// imgs
import pope from "../assets/images/pope.jpg";

// components
import IntroVote from "../Components/IntroVote"

const StyledHome = styled.div`
    display: flex;
    align-items: stretch;
    .introSection {
        flex: 1;
        width: 100vw;
        height: 100vh;
        background-image: url(${pope});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        // ::before {
        //     content:"";
        //     display: block;
        //     height: 100%;
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.0) );
        // }
    }
`;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            popeScore: 0,
            kanyeScore: 0,
            markScore: 0,
            cristinaScore: 0,
            malalaScore: 0
        }
    }
    render() {
        return (
            <StyledHome>
                <div className="introSection">
                    <IntroVote className="introVote" />
                </div>
            </StyledHome>
        )
    }
}
