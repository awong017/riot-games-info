import React from "react";
import Styled from "styled-components";

const ComponentOneDiv = Styled.div`
    text-align: center;
`

const ComponentOne = () => {
    return (
        <ComponentOneDiv>
            <h1>Component One</h1>
        </ComponentOneDiv>
    )
};

export default ComponentOne;