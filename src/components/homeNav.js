import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const HomeNavDiv = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid white;
    height: 100px;
    color: white;
`

const HomeNav = () => {
    return (
        <ThemeProvider theme={globalStyles}>
            <HomeNavDiv>
                <p>Home Nav Component</p>
            </HomeNavDiv>
        </ThemeProvider>
    );
};

export default HomeNav;
