import React, { useContext } from "react";
import TableListItem from "./tableListItem";
import Context from "../context";
import Styled from "styled-components";

const TableListDiv = Styled.div`
    margin: 48px auto;
    border: 2px solid white;
    width: 400px;
    height: 500px;
    color: white;

    h1 {
        text-align: center;
    }
`

const TableList = () => {
    const { data } = useContext(Context);
    return (
        <TableListDiv>
            <h1>Friends</h1>
            <TableListItem />
        </TableListDiv>
    )
};

export default TableList;