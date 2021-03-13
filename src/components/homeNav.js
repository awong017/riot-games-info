import React from "react";
import { Link } from "react-router-dom";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const HomeNavDiv = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid white;
    padding-top: 96px;
    color: white;

    ul {
        display: flex;
        flex-direction: row-reverse;

        padding-left: 0px;
        list-style: none;

        li {
            padding-right: 24px;
            
            a {
                text-decoration: none;
                color: white;

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
`

const HomeNav = () => {
    return (
        <ThemeProvider theme={globalStyles}>
            <HomeNavDiv>
                <ul>
                    <li>
                        <Link to={"/add-friend"}>
                            Add Friend
                        </Link>
                    </li>
                </ul>
            </HomeNavDiv>
        </ThemeProvider>
    );
};

export default HomeNav;
