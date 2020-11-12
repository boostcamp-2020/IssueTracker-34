// src/App.js
import React, { useEffect, useState, createContext, useReducer } from 'react';
import LoginPage from './pages/LoginPage';
import IssueListPage from './pages/IssueListPage';
import IssueMakePage from './pages/IssueMakePage';
import IssueDetailPage from './pages/IssueDetailPage';
import LabelListPage from './pages/LabelListPage';
import MilestoneEditPage from './pages/MilestoneEditPage';
import MilestoneListPage from './pages/MilestoneListPage';
import MilestoneMakePage from './pages/MilestoneMakePage';
import IssuesHeader from './components/IssuesHeader';
import styled from 'styled-components';
import queryString from 'query-string'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import userAPI from './apis/user.api';

const StyledDiv = styled.div`
  margin: 4rem;
`;

export const UserInfoContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
  case 'setInitial':
    return action.payload;
  default:
    return state;
  }
}

const addUserInfo = () => {

}

const initialState = { username: '', userId: null }


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { code } = queryString.parse(window.location.search);

  const [userInfo, userInfoDispatch] = useReducer(reducer, initialState);


  // userInfoDispatch({ type: 'setInitial', payload: { userInfo: 'asd', usershit: "asffff" } });


  // const checkLogin = async() => {
  //   const token = localStorage.getItem('token');
  //   if (token && !loggedIn) {
  //     console.log(token, "token")
  //     const userInfo = await userAPI.getUserInfo(token);
  //     console.log(userInfo);
  //     setUserInfo(userInfo)
  //     setLoggedIn(true);
  //     return;
  //   }
  //   setLoggedIn(false);
  // };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <>
      <Router>
        {loggedIn ? <IssuesHeader setLoggedIn={setLoggedIn}/> : ''}
        <UserInfoContext.Provider value={{ userInfo, userInfoDispatch }} >
          <StyledDiv >
            <Switch>
              <Route exact path="/">
                <LoginPage setLoggedIn={setLoggedIn} />
              </Route>
              <Route exact path="/issue/list">
                <IssueListPage />
              </Route>
              <Route exact path="/issue/make">
                <IssueMakePage />
              </Route>
              <Route path="/issue/:id">
                <IssueDetailPage />
              </Route>
              <Route path="/label/list">
                <LabelListPage />
              </Route>
              <Route path="/milestone/list">
                <MilestoneListPage />
              </Route>
              <Route path="/milestone/make">
                <MilestoneMakePage />
              </Route>
              <Route path="/milestone/:id/edit">
                <MilestoneEditPage />
              </Route>
            </Switch>
          </StyledDiv>
        </UserInfoContext.Provider>
        {!loggedIn ? (code ? '' :
          <Redirect to="/" />
        ) : (<Redirect to="/label/list" />)}
      </Router>
    </>
  );
};

export default App;
