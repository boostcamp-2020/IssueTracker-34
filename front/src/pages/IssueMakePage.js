import React from 'react';
import styled from 'styled-components';
import AssigneesSelector from '../components/AssigneesSelector';
import IssueWriteSection from '../components/IssueWriteSection';
import LabelsSelector from './../components/LabelsSelector';

const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 0 16px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 16px;
`;

const IssueMakePage = () => {
  return (
    <BodyDiv>
      <LeftDiv>
        <IssueWriteSection />
      </LeftDiv>
      <RightDiv>
        <AssigneesSelector />
        <LabelsSelector />
      </RightDiv>
    </BodyDiv>
  );
};

export default IssueMakePage;
