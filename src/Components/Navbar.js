import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const StyledNavbar = styled.nav`
    padding: 20px 3vw;
    width: 94vw;
    display: flex;
    height: 5vh;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0));
    position: absolute;
    top: 0;
    z-index: 10000;
    .brand {
        font-size: 2rem;
        text-decoration: none;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        li {
            margin: 0px 20px;
            color: white;
            font-size: 1rem;

            display: flex;
            justify-content: center;
            align-items: center;
            a{
                text-decoration: none;
                color: white;
                :hover {
                    text-decoration: underline;
                    color: white;
                }
            }
            svg {
                cursor: pointer;
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
                    <Link to="/PastTrials">Past Trials</Link>
                </li>
                <li>
                    <Link to="/HowItWorks">How it works</Link>
                </li>
                <li>
                    <Link to="/Login">Login/Sign Up</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSearch} />
                </li>
            </ul>
        </StyledNavbar>
    )
}
