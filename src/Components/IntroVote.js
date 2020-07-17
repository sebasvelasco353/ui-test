import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function IntroVote() {
    const StyledVoteBooth = styled.div`
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 250px;
        left: 10vw;
        .IntroVote_content{
            padding: 3rem;
            width: 550px;
            // height: 350px;
            height: 100%;
            backdrop-filter: blur(0.8);
            background-color: rgba( 0, 0, 0, 0.3);
            color: white;
            font-size: 1.5rem;
            .header {
                p{
                    margin: 0;
                }
                h2{
                    margin: 0;
                    font-size: 5rem;
                }
            }
            .text {
                margin: 20px 0;
                a {
                    color: white;
                    margin: 20px 0;
                    font-size: 1.2rem;
                }
            }
        }
        .veredict {
            .buttons {
                button {
                    height: 100px;
                    width: 50%;
                    color: white;
                }
                .upVote {
                    background-color: rgba(92, 184, 178, 0.8);
                    border: none;
                }
                .downVote {
                    background-color: rgba(245, 183, 80, 0.8);
                    border: none;
                }
            }
        }
        @media screen and (max-width: 800px){
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;

            .IntroVote_content {
                padding: 10px;
                width: 100%;
                height: 100%;
                -webkit-backdrop-filter: blur(0.8);
                backdrop-filter: blur(0.8);
                background-color: rgba( 0,0,0,0.3);
                color: white;
                font-size: 1.5rem;
                box-sizing: border-box;
            }
        }
    `;
    return (
        <StyledVoteBooth>
            <div className="IntroVote_content">
                <div className="header">
                    <p>What's your opinion on </p>
                    <h2>Pope Francis?</h2>
                </div>
                <div className="text">
                    <p>He's talking tought on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff (thumbs up)</p>
                    {/* TODO: agregar icono de wikipedia */}
                    <a href="https://en.wikipedia.org/wiki/Pope_Francis"><i className="fa fa-wikipedia-w" aria-hidden="true"></i> More information</a>
                </div>
                <h3>What's Your Veredict?</h3>
            </div>
            <div className="veredict">
                <div className="buttons">
                    <button className="upVote">
                        <FontAwesomeIcon className="fas fa-5x" icon={faThumbsUp} />
                    </button>
                    <button className="downVote">
                        <FontAwesomeIcon className="fas fa-5x" icon={faThumbsDown} />
                    </button>
                </div>
            </div>
        </StyledVoteBooth>
    )
}
