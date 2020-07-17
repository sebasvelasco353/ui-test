import React, { Component } from 'react'
import styled from 'styled-components';

// imgs
import pope from "../assets/images/pope.jpg";

// components
import IntroVote from "../Components/IntroVote"

const StyledPope = styled.div`
    .introSection {
        position: relative;
        flex: 1;
        width: 100vw;
        height: 95vh;
        background-image: url(${pope});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .remainingDays {
        position: absolute;
        background-color:red;
        height: 50px;
        bottom: 0px;
        width: 100%;
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
            <StyledPope>
                <div className="introSection">
                    <IntroVote className="introVote" />
                    <div className="remainingDays">
                        <p>Closing in <span>22 Days</span></p>
                    </div>
                </div>
            </StyledPope>
        )
    }
}
