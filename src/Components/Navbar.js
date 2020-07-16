import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        li {
            margin: 0px 20px;
        }
    }
`;

export default function Navbar() {
    return (
        <StyledNavbar>
            <Link to="/">Rule of Thumb</Link>
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
