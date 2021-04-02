import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/home";
import AddFriend from "./components/addFriend";
import ActsList from "./components/actsList";
import Context from "./context";
import uuid from "uuid/dist/v4";
import Styled from "styled-components";

const AppDiv = Styled.div`
`

const renderRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/add-friend" component={AddFriend}/>
      <Route path="/acts" component={ActsList}/>
    </>
  );
};

const App = (props) => {
  const [ valorantData, setValorantData ] = useState({});

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

  const [ search, setSearch ] = useState({value:""});

  const [ sort, setSort ] = useState(
    {
      nameSort: false,
      ageSort: false
    }
  );

  const [ errorMessage, setErrorMessage ] = useState(
    {
      nameError: "",
      ageError: ""
    }
  );

  const toggleSort = () => {
    setSort(({ nameSort, ...prevState }) => 
        ({nameSort: !nameSort, ...prevState})
    )
  };

  const searchByName = () => {
    if (search.value !== "") {
      return data.filter(friends => friends.name.includes(search.value.toLowerCase()));
    }
    else {
      return data;
    }
  };

  const handleNameSort = (a,b) => {
    setSort(
      {
        nameSort: !sort.nameSort,
        ageSort: sort.ageSort
      }
    );
    const order = (sort.nameSort === false) ? -1 : 1;
    return order * a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  };

  const handleAgeSort = (a,b) => {
    setSort(
      {
        nameSort: sort.nameSort,
        ageSort: !sort.ageSort
      }
    );
    const order = (sort.ageSort === false) ? a.age-b.age : b.age-a.age;
    return order
  };

  const handleAddFriend = (e, friend) => {
    e.preventDefault();
    if (!friend.name || friend.name.includes(" ") || typeof friend.name !== "string") {
      setErrorMessage(
        {
          nameError: "Please input a valid friend name",
          ageError: ""
        }
      );
    }
    else if (!friend.age || friend.age <= 0 || typeof friend.age !== "number") {
      setErrorMessage(
        {
          nameError: "",
          ageError: "Please input a valid friend age"
        }
      );
    }
    else {
      setErrorMessage(
        {
          nameError: "",
          ageError: ""
        }
      );
      let newFriend = {
        id: uuid(),
        name: friend.name,
        age: friend.age
      };
      setData([...data, newFriend]);
      props.history.push("/");
    }
  };

  const handleDeleteFriend = (friendID) => {
    let filteredFriends = data.filter(friend => friend.id !== friendID);
    setData(filteredFriends);
  }

  let contextValue = {
    valorantData: valorantData,
    setValorantData: setValorantData,
    data: data,
    setSearch: setSearch,
    errorMessage: errorMessage,
    searchByName: searchByName,
    sort: sort,
    toggleSort: toggleSort,
    handleNameSort: handleNameSort,
    handleAgeSort: handleAgeSort,
    handleAddFriend: handleAddFriend,
    handleDeleteFriend: handleDeleteFriend
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
