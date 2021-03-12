import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const TableListItemDiv = Styled.div`
    color: ${(props) => props.theme.color};

    ul {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        padding-left: 0;
        list-style: none;

        li {
            text-align: center;
        }
    }
`

const TableListItem = (props) => {
    return (
        <ThemeProvider theme={globalStyles}>
            <TableListItemDiv>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.age}</li>
                </ul>
            </TableListItemDiv>
        </ThemeProvider>
    )
};

export default TableListItem;
