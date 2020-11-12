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
import queryString from 'query-string';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import userAPI from './apis/user.api';
import IssueAPI from './apis/issue.api';

const StyledDiv = styled.div`
  margin: 4rem;
`;

export const UserInfoContext = React.createContext();
export const IssueContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'setInitial':
      return action.payload;
    default:
      return state;
  }
}

const initialState = { username: '', userId: null };

function issueReducer(issue, action) {
  switch (action.type) {
    case 'toggle_status':
      if (issue.status_open_closed == 0) {
        return { ...issue, status_open_closed: 1 };
      }
      return { ...issue, status_open_closed: 0 };
    case 'set_issue':
      return action.payload;
    case 'change_title':
      const newTitle = action.payload.title;
      return { ...issue, title: newTitle };
    case 'edit_issue_content':
      const newContent = action.payload.content;
      return { ...issue, content: newContent };
    default:
      return issue;
  }
}

const getIssue = (id, issues) => {
  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });
  return issue;
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { code } = queryString.parse(window.location.search);

  const [userInfo, userInfoDispatch] = useReducer(userReducer, initialState);
  const [issueInfo, dispatch] = useReducer(issueReducer, {});

  useEffect(async () => {
    const issues = await IssueAPI.getIssues();
    dispatch({ type: 'set_issue', payload: issues });
  }, []);

  return (
    <>
      <Router>
        {loggedIn ? <IssuesHeader setLoggedIn={setLoggedIn} /> : ''}
        <UserInfoContext.Provider value={{ userInfo, userInfoDispatch }}>
          <IssueContext.Provider value={{ issueInfo, dispatch }}>
            <StyledDiv>
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
          </IssueContext.Provider>
        </UserInfoContext.Provider>
        {!loggedIn ? (
          code ? (
            ''
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <Redirect to="/issue/list" />
        )}
      </Router>
    </>
  );
};

export default App;
