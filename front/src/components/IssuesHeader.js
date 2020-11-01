import React from 'react';
import styled from 'styled-components';
import HeaderSvg from '../svgs/HeaderSvg';

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
      <HeaderSvg />
      <span>ISSUES</span>
    </Header>
  );
};

export default IssuesHeader;
