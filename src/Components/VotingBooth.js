import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function VotingBooth({handleVoteClick, candidate}) {
    console.log("candidate: ", candidate)
    const StyledVoteBooth = styled.div`
        display: flex;
        flex-direction: column;
        margin: 30px 30px;
        width: 45%;
        background-color: gray;
        .VotingBooth_content{
            background-image: url(${candidate.img});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
            padding: 20px;
            // :before{
            //     content: "",
            //     display: block;
            //     width: 45%;
            //     background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0));
            // }
            h2{
                font-size: 3rem;
                color: white;
            }
        }
        .veredict{
            .buttons {
                button {
                    width: 50%;
                    height: 50px;
                    border: none;
                    color: white;
                }
                .upVote {
                    background-color: rgba(92, 184, 178, 0.8);
                    border: none;
                    width: ${candidate.totalVotes !== 0 ? ((candidate.upVotes / candidate.totalVotes) * 100) : 50}%
                }
                .downVote {
                    background-color: rgba(245, 183, 80, 0.8);
                    border: none;
                    width: ${candidate.totalVotes !== 0 ? (100 - ((candidate.upVotes / candidate.totalVotes) * 100)) : 50}%
                }
            }
        }
        @media screen and (max-width: 800px){
            width: 100vw;
            height: 100vh;
        }
    `;
    return (
        <StyledVoteBooth>
            <div className="VotingBooth_content">
                <h2>{ candidate.candidate }</h2>
            </div>
            <div className="veredict">
                <div className="buttons">
                    <button className="upVote" onClick={() => handleVoteClick(candidate.candidate, true)}>
                        <FontAwesomeIcon className="fas fa-lg" icon={faThumbsUp} />
                    </button>
                    <button className="downVote" onClick={() => handleVoteClick(candidate.candidate, false)}>
                        <FontAwesomeIcon className="fas fa-lg" icon={faThumbsDown} />
                    </button>
                </div>
            </div>
        </StyledVoteBooth>
    )
}
