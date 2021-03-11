import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import TableList from "./components/tableList";
import Context from "./context";
import Styled from "styled-components";

const AppDiv = Styled.div`
`

const renderRoutes = () => {
  return (
    <>
      <Route path="/" component={TableList}/>
    </>
  );
};

const App = () => {
  const [ data, setData ] = useState(
    [
      {
          id: 1,
          name: "adam",
          age: 31
      },
      {
          id: 2,
          name: "alexis",
          age: 26
      },
      {
          id: 3,
          name: "cindy",
          age: 35
      },
      {
          id: 4,
          name: "brian",
          age: 29
      },
      {
          id: 5,
          name: "shaan",
          age: 32
      }
    ]
  );

  let contextValue = {
    data: data
  }

  return (
    <Context.Provider value={contextValue}>
      <AppDiv>
        {renderRoutes()}
      </AppDiv>
    </Context.Provider>
  )
};

export default withRouter(App);
