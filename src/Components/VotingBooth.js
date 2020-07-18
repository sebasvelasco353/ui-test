import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function VotingBooth({handleVoteClick, candidate, index}) {
    const StyledVoteBooth = styled.div`
        display: flex;
        flex-direction: column;
        margin: ${(index+=1)%2 == 0 ? "30px 0px 30px 30px" : "30px 30px 30px 0px" };
        width: 45%;
        background-color: gray;
        .VotingBooth_content{
            display: flex;
            flex-direction: column;
            background-image: url(${candidate.img});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
            h2{
                font-size: 2.5rem;
                color: white;
                margin: 0 15px;
            }
            .statusRow{
                display: flex;
                flex-direction: row;
                justify-content: left;
                align-items: center;
                width: 100%;
                font-size: 1rem;
                .voteStatus {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    background-color: ${((candidate.upVotes / candidate.totalVotes) * 100) > 50 ? "rgba(92, 184, 178, 0.8)" : "rgba(245, 183, 80, 0.8)" }
                }
            }
            .time {
                color: white;
                font-size: 1rem;
                padding-left: 60px;
            }
            .description{
                color: white;
                font-size: 1rem;
                margin: 0;
                padding: 0px 60px;
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
                span {
                    margin: 0 10px;

                }
                .upVote {
                    background-color: rgba(92, 184, 178, 0.8);
                    border: none;
                    width: ${candidate.totalVotes !== 0 ? ((candidate.upVotes / candidate.totalVotes) * 100) : 50}%;
                    min-width: 20%;
                    max-width: 80%;
                }
                .downVote {
                    background-color: rgba(245, 183, 80, 0.8);
                    border: none;
                    width: ${candidate.totalVotes !== 0 ? (100 - ((candidate.upVotes / candidate.totalVotes) * 100)) : 50}%;
                    min-width: 20%;
                    max-width: 80%;
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
                <div className="statusRow">
                    <div className="voteStatus">
                        <FontAwesomeIcon className="fas fa-lg" icon={((candidate.upVotes / candidate.totalVotes) * 100) > 50 ? faThumbsUp : faThumbsDown} />
                    </div>
                    <h2>{ candidate.candidate }</h2>
                </div>
                <br/>
                {/* TODO: agregar locale para meses correctos */}
                <p className="time"> <b>{Math.ceil(((((new Date() - candidate.since)/1000)/60/60)/24)/30)} Months ago</b> in <b>{candidate.category}</b></p>
                <p className="description">{candidate.description}</p>
            </div>
            <div className="veredict">
                <div className="buttons">
                    <button className="upVote" onClick={() => handleVoteClick(candidate.candidate, true)}>
                        <FontAwesomeIcon className="fas fa-lg" icon={faThumbsUp} />
                        <span>{((candidate.upVotes / candidate.totalVotes) * 100)}%</span>
                    </button>
                    <button className="downVote" onClick={() => handleVoteClick(candidate.candidate, false)}>
                        <span>{(100 - ((candidate.upVotes / candidate.totalVotes) * 100))}%</span>
                        <FontAwesomeIcon className="fas fa-lg" icon={faThumbsDown} />
                    </button>
                </div>
            </div>
        </StyledVoteBooth>
    )
}
