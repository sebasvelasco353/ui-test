import React from 'react'
import styled from 'styled-components';

export default function IntroVote() {
    const StyledVoteBooth = styled.div`
        .IntroVote_blur{
            display:block;
            position: absolute;
            top: 20vh;
            left: 10vw;
            width: 52vw;
            height: 69vh;
            filter: blur(5px);
            opacity: 0.95;
            background-color: rgba(42, 42, 42, 0.3);
        }
        .IntroVote_content{
            padding: 3rem;
            position: absolute;
            top: 20vh;
            left: 10vw;
            width: 45vw;
            height: 60vh;
            backdrop-filter: blur(0.8);
            background-color: rgba( 0, 0, 0, 0.1);
            color: white;

            font-size: 1.5rem;
            .header {
                margin: 0;
            }
            h2{
                margin: 0;
                font-size: 5rem;
            }
        }
    `;
    return (
        <StyledVoteBooth>
            <div className="IntroVote_blur"></div>
            <div className="IntroVote_content">
                <div className="header">
                    <p className="header">What's your opinion on </p>
                    <h2>Pope Francis?</h2>
                </div>
                <div className="text">
                    <p>He's talking tought on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff (thmbs up)</p>
                </div>
            </div>
        </StyledVoteBooth>
    )
}
