import React from 'react';
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

const IssuesHeader = ({ loggedIn, setLoggedIn }) => {

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    console.log(loggedIn, "clicked logout", localStorage.getItem('token'));
    return <Redirect to={`/`}/>
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
      {!loggedIn && <Redirect to={`/`}/>}
    </Header>
  );
};

export default IssuesHeader;
