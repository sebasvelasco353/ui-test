import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
    padding: 20px 3vw;
    width: 94vw;
    display: flex;
    height: 3vh;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    position: absolute;
    top: 0;
    z-index: 10000;
    .brand {
        font-weight: 900;
        font-size: 1.5rem;
        text-decoration: none;
        color: white;
    }
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        li {
            margin: 0px 20px;
            color: white;
            a{
                text-decoration: none;
                color: white;
            }
        }
    }
`;

export default function Navbar() {
    return (
        <StyledNavbar>
            <Link className="brand" to="/">Rule of Thumb.</Link>
            <ul>
                <li>
                    <Link to="/PastTrials">PastTrials</Link>
                </li>
                <li>
                    <Link to="/HowItWorks">How it works</Link>
                </li>
                <li>
                    <Link to="/Login">Login/Sign Up</Link>
                </li>
                <li>
                    Search Icon
                </li>
            </ul>
        </StyledNavbar>
    )
}
