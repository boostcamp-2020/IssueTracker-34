import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSvg from '../svgs/HeaderSvg';
import { Redirect } from 'react-router-dom';

const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-size: 20px;
  color: white;
`;

const LogoutButton = styled.button`
  position: fixed;
  right: 4rem;
`

const IssuesHeader = ({ setLoggedIn }) => {

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    return
  }

  return (
    <Header>
      <StyledA href={`/issue/list`}>
        <HeaderSvg />
        <span>ISSUES</span>
      </StyledA>
      <LogoutButton type='button' onClick={() => {
        logout()
      }}>logout</LogoutButton>
    </Header>
  );
};

export default IssuesHeader;
