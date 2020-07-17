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
        background-color: rgba(0, 0, 0, 0.2);
        height: 50px;
        bottom: 0px;
        width: 100%;
    }
`;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            pope: 0,
            popeTrue: 0,
            kanye: 0,
            kanyeTrue: 0,
            mark: 0,
            markTrue: 0,
            cristina: 0,
            cristinaTrue: 0,
            malala: 0,
            malalaTrue: 0
        }
    }
    handleVoteClick(candidate, vote){
        console.log(candidate, " ", vote)
        switch (candidate) {
            case "pope":
                (vote === true) ? this.setState({pope: this.state.pope + 1, popeTrue: this.state.popeTrue + 1}) : this.setState({pope: this.state.pope + 1});
                break;
            case "kanye":
                (vote === true) ? this.setState({kanye: this.state.kanye + 1, kanyeTrue: this.state.kanyeTrue + 1}) : this.setState({kanye: this.state.kanye + 1});
                break;
            case "mark":
                (vote === true) ? this.setState({mark: this.state.mark + 1, markTrue: this.state.markTrue + 1}) : this.setState({mark: this.state.mark + 1});
                break;
            case "cristina":
                (vote === true) ? this.setState({cristina: this.state.cristina + 1, cristinaTrue: this.state.cristinaTrue + 1}) : this.setState({cristina: this.state.cristina + 1});
                break;
            case "malala":
                (vote === true) ? this.setState({malala: this.state.malala + 1, malalaTrue: this.state.malalaTrue + 1}) : this.setState({malala: this.state.malala + 1});
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <StyledPope>
                <div className="introSection">
                    <IntroVote className="introVote" handleVoteClick={this.handleVoteClick.bind(this)} candidate="pope" />
                    <div className="remainingDays">
                        <p>Closing in <span>22 Days</span></p>
                    </div>
                </div>
            </StyledPope>
        )
    }
}
