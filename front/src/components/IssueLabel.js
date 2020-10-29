import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  background-color: ${(props) => props.color || 'white'};
  color: #000000;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border: 1px solid transparent;
  border-radius: 2em;
`;

const IssueLabel = ({ name, color }) => {
  return <StyledA color={color}>{name}</StyledA>;
};

export default IssueLabel;
