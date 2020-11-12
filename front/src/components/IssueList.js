import React, { useContext } from 'react';
import styled from 'styled-components';
import IssueContent from './IssueContent';
import SelectedCount from './SelectedCount';
import AuthorFilterButton from './AuthorFilterButton';
import AssigneeFilterButton from './AssigneeFilterButton';
import LabelFilterButton from './LabelFilterButton';
import MilestoneFilterButton from './MilestoneFilterButton';
import MarkAs from './MarkAs';
import { IssueListPageContext } from './../pages/IssueListPage';

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

const IssueList = () => {
  const { issueList, issueListDispatch, authorList, assigneeList } = useContext(
    IssueListPageContext
  );
  const [checkedAuthor] = authorList.filter((author) => author.isChecked);
  const [checkedAssignee] = assigneeList.filter(
    (assignee) => assignee.isChecked
  );

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
    <IssueSection>
      <Header>
        <AllCheckDiv>
          <input
            type="checkbox"
            name="all-issue"
            value="all"
            checked={getCountChecked() === issueList.length ? true : false}
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
        {issueList
          .filter((issue) => {
            if (checkedAuthor === undefined) return true;
            return issue.user.id === checkedAuthor.id;
          })
          .filter((issue) => {
            if (checkedAssignee === undefined) return true;
            if (checkedAssignee.id === null) {
              return issue.assignees.length === 0;
            }
            return (
              issue.assignees.filter(
                (assignee) => checkedAssignee.id === assignee.id
              ).length !== 0
            );
          })
          .map((issue, index) => {
            return (
              <IssueContent key={`issue${issue.id}-${index}`} data={issue} />
            );
          })}
      </section>
    </IssueSection>
  );
};

export default IssueList;
