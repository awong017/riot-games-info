import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const CharactersListDiv = Styled.div``

const CharactersList = () => {
    return (
        <ThemeProvider theme={globalStyles}>
            <CharactersListDiv>
                Characters List Component
            </CharactersListDiv>
        </ThemeProvider>
    );
};

export default CharactersList;
