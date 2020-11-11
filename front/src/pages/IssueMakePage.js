import React, { useState } from 'react';
import styled from 'styled-components';
import AssigneesSelector from '../components/AssigneesSelector';
import IssueWriteSection from '../components/IssueWriteSection';
import LabelsSelector from './../components/LabelsSelector';

export const IssueContext = React.createContext();

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
  const [assignees, setAssignee] = useState([
    {
      id: 'pieisland',
      checked: true,
      name: 'ryu',
      profileUrl:
        'https://avatars2.githubusercontent.com/u/35261724?s=80&amp;v=4',
    },
    { id: 'comi', checked: false },
    { id: 'remi', checked: true },
    { id: 'comi2', checked: false },
    { id: 'remi2', checked: false },
    { id: 'comi3', checked: false },
    { id: 'remi3', checked: false },
    { id: 'comi4', checked: false },
    { id: 'remi4', checked: false },
    { id: 'comi5', checked: false },
    { id: 'remi5', checked: false },
    { id: 'comi6', checked: false },
  ]);
  const [labels, setLabel] = useState([]);

  return (
    <BodyDiv>
      <LeftDiv>
        <IssueWriteSection assignees={assignees} labels={labels} />
      </LeftDiv>
      <RightDiv>
        <AssigneesSelector assignees={assignees} setAssignee={setAssignee} />
        <LabelsSelector labels={labels} setLabel={setLabel} />
      </RightDiv>
    </BodyDiv>
  );
};

export default IssueMakePage;
