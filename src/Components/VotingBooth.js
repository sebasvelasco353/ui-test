import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function VotingBooth({handleVoteClick, candidate}) {
    const StyledVoteBooth = styled.div`
        display: flex;
        flex-direction: column;
        margin: 30px 40px;
        width: 40%;
        background-color: gray;
        .VotingBooth_content{
            width: 100%;
            height: 500px;
            padding: 20px;
        }
        .veredict{
            .buttons {
                button {
                    width: 50%;
                    height: 50px;
                    border: none;
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
                
            </div>
            <div className="veredict">
                <div className="buttons">
                    <button className="upVote" onClick={() => handleVoteClick(candidate, true)}>
                        <FontAwesomeIcon className="fas fa-lg" icon={faThumbsUp} />
                    </button>
                    <button className="downVote" onClick={() => handleVoteClick(candidate, false)}>
                        <FontAwesomeIcon className="fas fa-lg" icon={faThumbsDown} />
                    </button>
                </div>
            </div>
        </StyledVoteBooth>
    )
}
