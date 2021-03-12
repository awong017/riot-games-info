import React, { useContext } from "react";
import Filters from "./filters";
import TableListItem from "./tableListItem";
import Context from "../context";
import Styled from "styled-components";

const TableListDiv = Styled.div`
    margin: 200px auto;
    border: 2px solid white;
    width: 400px;
    height: 500px;
    color: white;

    h1 {
        text-align: center;
    }

    section {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        text-align: center;

        div {
            display: flex;
            justify-content: space-around;

            h2 {
                margin-left: 24px;
            }

            button {
                margin-top: auto;
                margin-bottom: auto;
                margin-right: 24px;
                height: 24px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`

const TableList = () => {
    const { data, searchByName, handleNameSort, handleAgeSort } = useContext(Context);
    return (
        <TableListDiv>
            <h1>Friends</h1>
            <Filters />
            <section className="heading">
                <div>
                    <h2>Name</h2>
                    <button onClick={() => data.sort(handleNameSort)}>^</button>
                </div>
                <div>
                    <h2>Age</h2>
                    <button onClick={() => data.sort(handleAgeSort)}>^</button>
                </div>
            </section>
            {searchByName().map(friend => 
                 <TableListItem 
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                 />
            )}
        </TableListDiv>
    )
};

export default TableList;