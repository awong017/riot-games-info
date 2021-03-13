import React, { useState } from "react";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const AddFriendDiv = Styled.div`
    margin-top: 96px;
    color: white;

    form {
        margin: auto;
        width: 500px;

        legend {
            margin-bottom: 24px;
        }

        fieldset {
            
            div {
                margin-bottom: 24px;

                label {
                    display: block;
                    margin-bottom: 8px;
                }

                input {
                    border: 1px solid white;
                    padding: 4px 8px;
                    background-color: black;
                    color: white
                }
            }
        }

        button {
            margin-top: 24px;
            border: 1px solid white;
            padding: 4px 8px;
            background-color: black;
            color: white;

            &:hover {
                cursor: pointer;
                background-color: white;
                color: black;
                transition: 0.3s;
            }
        }
    }
`

const AddFriend = () => {
    const [ newFriend, setNewFriend ] = useState({name: "", age: ""})
    return (
        <ThemeProvider theme={globalStyles}>
            <AddFriendDiv>
                <form>
                    <legend><h2>Add Friend</h2></legend>
                    <fieldset>
                        <div>
                            <label>Name: </label>
                            <input 
                                type="text" 
                                placeholder="first name"
                                onChange={(e) => {setNewFriend({name:e.target.value, age: newFriend.age}); 
                                console.log(newFriend)}}
                            />
                            <div className="error" />
                        </div>
                        <div>
                            <label>Age: </label>
                            <input 
                                type="text" 
                                placeholder="age"
                                onChange={(e) => {setNewFriend({name:newFriend.name, age: e.target.value}); 
                                console.log(newFriend)}}
                            />
                            <div className="error" />
                        </div>
                    </fieldset>
                    <button type="submit">Add Friend</button>
                </form>
            </AddFriendDiv>
        </ThemeProvider>
    );
};

export default AddFriend;
