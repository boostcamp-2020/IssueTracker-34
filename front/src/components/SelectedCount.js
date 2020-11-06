import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: 14px;
`;

const SelectedCount = ({ count }) => {
  return <Span>{count} selected</Span>;
};

export default SelectedCount;
