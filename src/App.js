import React from "react";
import { Route, withRouter } from "react-router-dom";
import ComponentOne from "./components/componentOne";
import Styled from "styled-components";

const AppDiv = Styled.div`
  text-align: center;
  color: white;
`

const renderRoutes = () => {
  return (
    <>
      <Route path="/" component={ComponentOne}/>
    </>
  );
};

const App = () => {
  return (
    <AppDiv>
      {renderRoutes()}
    </AppDiv>
  )
};

export default withRouter(App);
