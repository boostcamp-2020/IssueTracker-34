import React from 'react';
import styled from 'styled-components';

const OutDiv = styled.div`
  display: flex;
`;

const IssueContext = () => {
  return (
    <OutDiv>
      <input type="checkbox" name="issue" value="" />
    </OutDiv>
  );
};

export default IssueContext;
