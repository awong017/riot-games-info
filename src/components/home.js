import React, { useState, useEffect } from "react";
import HomeNav from "./homeNav";
import TableList from "./tableList";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const HomeDiv = Styled.div`
    .error-message {
        text-align: center;
        color: red;
    }
`

const Home = () => {
    const [ errorMessage, setErrorMessage ] = useState();

    useEffect(() => {
        let isSubscribed = true;
        let apiKey = "RGAPI-a9031d71-ce9e-4621-9d18-984902b71596";
        let options = {
            "X-Riot-Token": apiKey
        }
        fetch(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${apiKey}`)
            .then(res => (isSubscribed ? res.json().then(resJson => console.log(resJson)) : null))
            .catch(error => (isSubscribed ? setErrorMessage(error.toString()) : null))
        return () => isSubscribed = false
    }, [])

    return (
        <ThemeProvider theme={globalStyles}>
            <HomeDiv>
                <HomeNav />
                <TableList />
                <div className="error-message">{errorMessage}</div>
            </HomeDiv>
        </ThemeProvider>
    );
};

export default Home;
