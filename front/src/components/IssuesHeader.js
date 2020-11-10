import React from 'react';
import styled from 'styled-components';
import HeaderSvg from '../svgs/HeaderSvg';

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

const IssuesHeader = () => {
  return (
    <Header>
      <StyledA href={`/issue/list`}>
        <HeaderSvg />
        <span>ISSUES</span>
      </StyledA>
    </Header>
  );
};

export default IssuesHeader;
