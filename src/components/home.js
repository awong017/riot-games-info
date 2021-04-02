import React, { useState, useContext, useEffect } from "react";
import HomeNav from "./homeNav";
import TableList from "./tableList";
import Config from "../config";
import Context from "../context";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const HomeDiv = Styled.div`
    .error-message {
        text-align: center;
        color: red;
    }
`

const Home = () => {
    const { valorantData, setValorantData } = useContext(Context);

    const [ errorMessage, setErrorMessage ] = useState();

    useEffect(() => {
        let isSubscribed = true;
        let options = {
            "X-Riot-Token": Config.apiKey
        }
        fetch(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${Config.apiKey}`)
            .then(res => (isSubscribed ? res.json().then(resJson => setValorantData(resJson)) : null))
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
