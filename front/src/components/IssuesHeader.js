import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSvg from '../svgs/HeaderSvg';
import { useHistory } from 'react-router-dom';

const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-size: 20px;
  color: white;
`;

const HomeDiv = styled.div`
  cursor: pointer;
`;

const LogoutButton = styled.button`
  position: absolute;
  right: 4rem;
`;

const IssuesHeader = ({ setLoggedIn }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    return;
  };
  const gotoHomePage = () => {
    history.push('/issue/list');
  };

  return (
    <Header>
      <HomeDiv onClick={gotoHomePage}>
        <HeaderSvg />
        <span>ISSUES</span>
      </HomeDiv>
      <LogoutButton
        type="button"
        onClick={() => {
          logout();
        }}
      >
        logout
      </LogoutButton>
    </Header>
  );
};

export default IssuesHeader;
