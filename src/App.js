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

  const [sort, setSort] = useState(
    {
      nameSort: false,
      ageSort: false
    }
  )

  const handleNameSort = (a,b) => {
    setSort(
      {
        nameSort: !sort.nameSort,
        ageSort: sort.ageSort
      }
    );
    const order = (sort.nameSort === false) ? -1 : 1;
    return order * a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  }

  const handleAgeSort = (a,b) => {
    setSort(
      {
        nameSort: sort.nameSort,
        ageSort: !sort.ageSort
      }
    );
    const order = (sort.ageSort === false) ? a.age-b.age : b.age-a.age;
    return order
  }

  let contextValue = {
    data: data,
    handleNameSort: handleNameSort,
    handleAgeSort: handleAgeSort
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
