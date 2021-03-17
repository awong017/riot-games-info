import React, { useContext } from "react";
import Context from "../context";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const TableListItemDiv = Styled.div`
    color: ${(props) => props.theme.font};

    ul {
        display: grid;
        grid-template-columns: 45% 45% 10%;
        padding-left: 0;
        list-style: none;

        li {
            text-align: center;
        }

        button {
            border: 1px solid white;
            background-color: black;
            color: white;

            &:hover {
                cursor: pointer;
                background-color: white;
                color: black;
            }
        }
    }
`

const TableListItem = (props) => {
    const { handleDeleteFriend } = useContext(Context);
    return (
        <ThemeProvider theme={globalStyles}>
            <TableListItemDiv>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.age}</li>
                    <li><button onClick={() => handleDeleteFriend(props.id)}>x</button></li>
                </ul>
            </TableListItemDiv>
        </ThemeProvider>
    )
};

export default TableListItem;
