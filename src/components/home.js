import React from "react";
import HomeNav from "./homeNav";
import TableList from "./tableList";
import Styled, { ThemeProvider } from "styled-components";
import globalStyles from "../styles/globalStyles";

const HomeDiv = Styled.div`
    
`

const Home = () => {
    return (
        <ThemeProvider theme={globalStyles}>
            <HomeDiv>
                <HomeNav />
                <TableList />
            </HomeDiv>
        </ThemeProvider>
    );
};

export default Home;
