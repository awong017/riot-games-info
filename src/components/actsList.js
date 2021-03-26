import React, { useContext } from "react";
import Context from "../context";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const ActsListDiv = Styled.div`
    color: white;
`

const ActsList = () => {
    const { valorantData } = useContext(Context);

    return (
        <ThemeProvider theme={globalStyles}>
            <ActsListDiv>
                <h1>Acts</h1>
                <ul className="acts-heading">
                    <li>Name</li>
                    <li>Type</li>
                    <li>Localized Names</li>
                </ul>
            </ActsListDiv>
        </ThemeProvider>
    );
};

export default ActsList;
