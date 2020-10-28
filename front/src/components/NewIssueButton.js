import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: 6px 12px;
  border: 0;
  outline: 0;
  background-color: #28a745;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const NewIssueButton = () => {
  return (
    <Link to="/issue/make">
      <Button>New issue</Button>
    </Link>
  );
};

export default NewIssueButton;
