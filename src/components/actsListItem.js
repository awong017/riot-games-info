import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const ActsListItemDiv = Styled.div``

const ActsListItem = (props) => {
    return (
        <ThemeProvider theme={globalStyles}>
            <ActsListItemDiv>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.type}</li>
                </ul>
            </ActsListItemDiv>
        </ThemeProvider>
    );
};

export default ActsListItem;
