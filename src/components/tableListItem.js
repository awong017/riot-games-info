import React from "react";
import Styled from "styled-components";

const TableListItemDiv = Styled.div`
    color: white;

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
        <TableListItemDiv>
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
            </ul>
        </TableListItemDiv>
    )
};

export default TableListItem;
