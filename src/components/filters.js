import React, { useContext } from "react";
import Context from "../context";
import Styled from "styled-components";

const FiltersDiv = Styled.div`
    margin: auto;
    width: 250px;
`

const Filters = () => {
    const { searchByName } = useContext(Context);
    return (
        <FiltersDiv>
            <label>Search: </label>
            <input 
                type="text" 
                placeholder="e.g name"
                onChange={(e) => searchByName(e.target.value)} 
            />
        </FiltersDiv>
    );
};

export default Filters;
