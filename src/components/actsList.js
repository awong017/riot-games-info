import React, { useContext } from "react";
import ActsListItem from "./actsListItem";
import Context from "../context";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const ActsListDiv = Styled.div`
    margin: 96px auto;
    border: 2px solid white;
    width: 600px;
    color: white;

    h1 {
        text-align: center;
    }

    .acts-heading {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        padding-left: 0px;
        list-style: none;

        li {
            text-align: center;
        }
    }
`

const ActsList = () => {
    const { valorantData } = useContext(Context);
    // const { acts } = valorantData;

    return (
        <ThemeProvider theme={globalStyles}>
            <ActsListDiv>
                <h1 onClick={() => console.log(valorantData)}>Acts</h1>
                <ul className="acts-heading">
                    <li>Name</li>
                    <li>Type</li>
                    <li>Localized Names</li>
                </ul>
            {/* {acts.map(act => 
                <ActsListItem 
                    key={act.id}
                    name={act.name}
                    type={act.type}
                    localizedNames={act.localizedNames}
                />
            )} */}
            </ActsListDiv>
        </ThemeProvider>
    );
};

export default ActsList;
