import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import GitHubSvg from '../svgs/GitHubSvg';
import SearchSvg from '../svgs/SearchSvg';
import PersonSvg from '../svgs/PersonSvg';
import queryString from 'query-string';
import Auth from '../apis/Auth.api';
import userAPI from '../apis/user.api';
import { UserInfoContext } from '../App';

const GITHUB_AUTHORIZATION_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.HOMEPAGE_URL}`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Box = styled.div`
  width: 33%;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  padding-right: 5px;
  color: ${(props) => props.color || 'white'};

  & > * {
    margin-top: 5px;
    margin-bottom: 5px;
    & > * {
      margin-right: 10px;
    }
  }
`;

const Shit = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1da1f2;
  outline: none;
  background-color: white;
  width: 95%;
  border-radius: 20px;
  & > * {
    padding-right: 10px;
  }
  :hover {
    background-color: #fcf7f7;
    cursor: pointer;
  }
  :active {
    background-color: #ebebeb;
  }
`;

const Title = styled.span`
  margin-bottom: 3rem;
  font-weight: bolder;
  font-size: xx-large;
`;

const LoginPage = ({ setLoggedIn }) => {
  const { userInfoDispatch } = useContext(UserInfoContext);
  const auth = async () => {
    const token = localStorage.getItem('token');
    const { code } = queryString.parse(window.location.search);
    if (token) {
      const userInfo = await userAPI.getUserInfo(token);
      userInfoDispatch({ type: 'setInitial', payload: userInfo });
      setLoggedIn(true);
      return;
    }

    if (!token && code) {

      const { token, authorizedUserId, authorizedUsername, authorizedProfileURL } = await Auth.login(code);
      localStorage.setItem('token', token);
      const userInfo = { 'authorizedUserId': authorizedUserId, 'authorizedUsername': authorizedUsername, 'authorizedProfileURL': authorizedProfileURL };
      userInfoDispatch({ type: 'setInitial', payload: userInfo });
      setLoggedIn(true);
      return;
    }
  };

  useEffect(async () => {
    await auth();
  }, []);

  return (
    <>
      <Outer>
        <GitHubSvg background={true} />
        <Shit>
          <Content>
            <Box>
              <div>
                {' '}
                <SearchSvg loginPage={true} />
                Issue를 관리 하세요.
              </div>
              <div>
                <PersonSvg />
                사람들과 Issue들을 등록 해서 프로젝트를 관리 해보세요.
              </div>
            </Box>
            <Box color="black">
              <GitHubSvg />
              <Title>
                지금 당신의 프로젝트에서 무슨 일이 일어나고 있는지 알아보세요.
              </Title>
              <div>오늘 Issue Tracker에 가입하세요.</div>
              <StyledLink href={GITHUB_AUTHORIZATION_URL}>
                <LoginButton type="button">
                  <GitHubSvg /> Login With github
                </LoginButton>
              </StyledLink>
            </Box>
          </Content>
        </Shit>
      </Outer>
    </>
  );
};

export default LoginPage;
