import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const CharactersListItemDiv = Styled.div``

const CharactersListItem = () => {
    return (
        <ThemeProvider theme={globalStyles}>
            <CharactersListItemDiv>
                Characters List Item
            </CharactersListItemDiv>
        </ThemeProvider>
    );
};

export default CharactersListItem;
