import React, { useContext } from "react";
import Context from "../context";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const FiltersDiv = Styled.div`
    margin: auto;
    width: 250px;

    input {
        border: 1px solid white;
        padding: 4px 8px;
        background-color: black;
        color: ${(props) => props.theme.font};
    }
`

const Filters = () => {
    const { setSearch } = useContext(Context);
    return (
            <ThemeProvider theme={globalStyles}>
            <FiltersDiv>
                <label>Search: </label>
                <input 
                    type="text" 
                    placeholder="e.g name"
                    onChange={(e) => setSearch({value:e.target.value})} 
                />
            </FiltersDiv>
        </ThemeProvider>
    );
};

export default Filters;
