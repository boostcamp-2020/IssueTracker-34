// src/App.js
import React, { useState } from 'react';
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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const StyledDiv = styled.div`
  margin: 4rem;
`;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const checkLogin = async () => {
    //TODO: login 확인용 api
  };

  return (
    <>
      {loggedIn ? <IssuesHeader /> : ''}
      <StyledDiv>
        <Router>
          <Switch>
            <Route exact path="/">
              {loggedIn ? (
                <Redirect to="issue/list" />
              ) : (
                <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              )}
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
        </Router>
      </StyledDiv>
    </>
  );
};

export default App;
