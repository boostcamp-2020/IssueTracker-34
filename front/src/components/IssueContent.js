import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ClosedIssueSvg from '../svgs/ClosedIssueSvg';
import OpenIssueSvg from '../svgs/OpenIssueSvg';
import IssueInfo from './IssueInfo';
import IssueLabel from './IssueLabel';

const OutDiv = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
`;

const CheckBoxLabel = styled.label`
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const IconDiv = styled.div`
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

const IssueDataDiv = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #586069;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const IssueContent = ({ data }) => {
  const issueLabels = data.labels.map((labelData, index) => {
    return (
      <IssueLabel
        key={`issueLabel${data.id}-${index}`}
        name={labelData.name}
        color={labelData.color}
      />
    );
  });

  return (
    <OutDiv>
      <CheckBoxLabel>
        <input type="checkbox" name={`issue${data.id}`} value={data.id} />
      </CheckBoxLabel>
      <IconDiv>
        {data.statusOpenClosed ? <OpenIssueSvg /> : <ClosedIssueSvg />}
      </IconDiv>
      <TitleDiv>
        <StyledLink to={`/issue/${data.id}`}>
          <IssueTitle>{data.title}</IssueTitle>
        </StyledLink>
        <LabelsContaier>{issueLabels}</LabelsContaier>
        <IssueDataDiv>
          <IssueInfo
            issueId={data.id}
            makeDate={data.date}
            author={data.author}
          />
        </IssueDataDiv>
      </TitleDiv>
    </OutDiv>
  );
};

export default IssueContent;
