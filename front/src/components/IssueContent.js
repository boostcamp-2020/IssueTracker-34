import React from 'react';
import styled from 'styled-components';

const OutDiv = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
`;

const CheckBoxLabel = styled.label`
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const TitleDiv = styled.div`
  box-sizing: border-box;
  padding: 8px;
`;

const IssueTitle = styled.a`
  font-weight: 600;
  font-size: 16px;
  vertical-align: middle;
  color: #24292e;
`;

const LabelsContaier = styled.span`
  display: inline;
  line-height: 1.5;
`;

const IssueLabel = styled.a`
  background-color: #77b21e;
  color: #000000;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border: 1px solid transparent;
  border-radius: 2em;
`;

const IssueDataDiv = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #586069;
`;

const IssueContent = () => {
  return (
    <OutDiv>
      <CheckBoxLabel>
        <input type="checkbox" name="issue" value="" />
      </CheckBoxLabel>
      <TitleDiv>
        <IssueTitle>First Issue</IssueTitle>
        <LabelsContaier>
          <IssueLabel>이슈 목록 화면</IssueLabel>
          <IssueLabel>이슈 상세 화면</IssueLabel>
        </LabelsContaier>
        <IssueDataDiv>
          <span>#1 opened yesterday by ???</span>
        </IssueDataDiv>
      </TitleDiv>
    </OutDiv>
  );
};

export default IssueContent;
