import React, { Component } from 'react'
import styled from 'styled-components';
// imgs
import pope from "../assets/images/pope.jpg";
// components
import IntroVote from "../Components/IntroVote"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const StyledPope = styled.div`
    .introSection {
        position: relative;
        height: 100vh;
        background-image: url(${pope});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .remainingDays {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.2);
            height: 50px;
            bottom: 0px;
            width: 100%;
        }
    }
    .candidatesSection{
        padding: 90px 7vw;
        .speakOut{
            padding: 15px 30px;
            height: 90px;
            background-color: rgb(235, 235, 235);
            display: flex;
            flex-direction: row;
            .left {
                width: 20%;
                font-size: 1.4rem;
                b{
                    font-size: 2.4rem;
                }
            }
            .center {
                width: 77%;
                font-size: 1.6rem;
            }
            .right {
                width: 3%;
                font-size: 1rem;
                font-weight: bold;
                text-align: right;
            }
        }
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
                <section className="introSection">
                    <IntroVote className="introVote" handleVoteClick={this.handleVoteClick.bind(this)} candidate="pope" />
                    <div className="remainingDays">
                        <p>Closing in <span>22 Days</span></p>
                    </div>
                </section>
                <section className="candidatesSection">
                    <div className="speakOut">
                        <div className="left">
                            <span>
                                Speak out. Be heard
                            </span>
                            <br/>
                            <b>Be counted</b>
                        </div>
                        <div className="center">
                            <span>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. Its easy: You share your opinion, we analyze and put the data in a public report.</span>
                        </div>
                        <div className="right">
                            {/* <FontAwesomeIcon className="fas fa-md" icon={faWindowClose} /> */}
                            X
                        </div>
                    </div>
                </section>
            </StyledPope>
        )
    }
}
