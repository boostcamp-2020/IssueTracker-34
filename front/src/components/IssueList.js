import React, { useEffect, useReducer, createContext } from 'react';
import styled from 'styled-components';
import IssueContent from './IssueContent';
import SelectedCount from './SelectedCount';
import AuthorFilterButton from './AuthorFilterButton';
import AssigneeFilterButton from './AssigneeFilterButton';
import LabelFilterButton from './LabelFilterButton';
import MilestoneFilterButton from './MilestoneFilterButton';
import MarkAs from './MarkAs';
import issueAPI from './../apis/issue.api';

const IssueSection = styled.section`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
`;

const AllCheckDiv = styled.div`
  margin-right: 16px;
`;

const ExtraHeader = styled.div`
  display: block;
  flex: auto;
`;

const RightFloatDiv = styled.div`
  float: right;
  display: ${(props) => props.display || 'block'};
  justify-content: ${(props) => props.justifyContent || ''};
  width: ${(props) => props.width || 'auto'};
`;

const issueListReducer = (issueList, { type, payload }) => {
  switch (type) {
    case 'setInitial':
      return payload;
    case 'checkAll':
      return issueList.map((issue) => {
        return { ...issue, isChecked: payload.isChecked };
      });
    case 'check':
      return issueList.map((issue) => {
        return issue.id === payload.id
          ? { ...issue, isChecked: !issue.isChecked }
          : issue;
      });
  }
};

export const IssueContext = createContext();

const IssueList = () => {
  const [issueList, issueListDispatch] = useReducer(issueListReducer, []);

  useEffect(async () => {
    const issues = await issueAPI.getIssues();

    const orderedIssues = issues
      .map((issue) => {
        return { ...issue, isChecked: false };
      })
      .sort((a, b) => (a.id > b.id ? -1 : 1));

    issueListDispatch({ type: 'setInitial', payload: orderedIssues });
  }, []);

  const getCountChecked = () => {
    return issueList.reduce((count, issue) => {
      if (issue.isChecked) count++;
      return count;
    }, 0);
  };

  const dropDownTags = (
    <RightFloatDiv display="flex" justifyContent="space-between" width="300px">
      <AuthorFilterButton />
      <LabelFilterButton />
      <MilestoneFilterButton />
      <AssigneeFilterButton />
    </RightFloatDiv>
  );

  const markAs = (
    <RightFloatDiv>
      <MarkAs />
    </RightFloatDiv>
  );

  return (
    <IssueContext.Provider value={{ issueList, issueListDispatch }}>
      <IssueSection>
        <Header>
          <AllCheckDiv>
            <input
              type="checkbox"
              name="all-issue"
              value="all"
              onChange={(e) =>
                issueListDispatch({
                  type: 'checkAll',
                  payload: { isChecked: e.target.checked },
                })
              }
            />
          </AllCheckDiv>
          <ExtraHeader>
            {!(getCountChecked() > 0) ? (
              <>{dropDownTags}</>
            ) : (
              <>
                <SelectedCount count={getCountChecked()} /> {markAs}{' '}
              </>
            )}
          </ExtraHeader>
        </Header>
        <section>
          {issueList.map((issue, index) => {
            return (
              <IssueContent key={`issue${issue.id}-${index}`} data={issue} />
            );
          })}
        </section>
      </IssueSection>
    </IssueContext.Provider>
  );
};

export default IssueList;
