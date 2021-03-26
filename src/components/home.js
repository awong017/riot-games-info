import React, { useState, useContext, useEffect } from "react";
import HomeNav from "./homeNav";
import TableList from "./tableList";
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
        let apiKey = "RGAPI-fdb4aa0a-5c74-4cf3-808d-59e123e95ffc";
        let options = {
            "X-Riot-Token": apiKey
        }
        fetch(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${apiKey}`)
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
