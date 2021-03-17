import React, { useState, useContext } from "react";
import Styled, { ThemeProvider } from "styled-components";
import Context from "../context";
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

            .error {
                color: red;
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
    const { data, errorMessage, handleAddFriend } = useContext(Context);
    const [ newFriend, setNewFriend ] = useState({name: "", age: ""})
    return (
        <ThemeProvider theme={globalStyles}>
            <AddFriendDiv>
                <form onSubmit={(e) => handleAddFriend(e, newFriend)}>
                    <legend><h2 onClick={() => console.log(data)}>Add Friend</h2></legend>
                    <fieldset>
                        <div>
                            <label>Name: </label>
                            <input 
                                type="text" 
                                placeholder="first name"
                                onChange={(e) => {setNewFriend({name:e.target.value, age: newFriend.age}); 
                                console.log(newFriend)}}
                            />
                            <div className="error">{errorMessage.nameError}</div>
                        </div>
                        <div>
                            <label>Age: </label>
                            <input 
                                type="text" 
                                placeholder="age"
                                onChange={(e) => {setNewFriend({name:newFriend.name, age: parseInt(e.target.value)}); 
                                console.log(newFriend)}}
                            />
                            <div className="error">{errorMessage.ageError}</div>
                        </div>
                    </fieldset>
                    <button type="submit">Add Friend</button>
                </form>
            </AddFriendDiv>
        </ThemeProvider>
    );
};

export default AddFriend;
