import React, { useState } from 'react';
import styled from 'styled-components';
import IssueContent from './IssueContent';
import SelectedCount from './SelectedCount';
import AuthorFilterButton from './AuthorFilterButton';
import AssigneeFilterButton from './AssigneeFilterButton';
import LabelFilterButton from './LabelFilterButton';
import MilestoneFilterButton from './MilestoneFilterButton';
import MarkAs from './MarkAs';

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

const tempIssueData = [
  {
    title: 'First Issue',
    id: 1,
    date: new Date('2020/10/27 11:00'),
    author: 'rockpell',
    statusOpenClosed: true,
    labels: [
      { name: '이슈 목록 화면', color: '#77b21e' },
      { name: '이슈 상세 화면', color: '#eccf9e' },
    ],
  },
  {
    title: 'Second Issue',
    id: 2,
    date: new Date('2020/10/28 12:00'),
    author: 'rockpell',
    statusOpenClosed: true,
    labels: [{ name: '이슈 목록 화면', color: '#77b21e' }],
  },
  {
    title: 'Third Issue',
    id: 3,
    date: new Date('2020/10/28 14:00'),
    author: 'rockpell',
    statusOpenClosed: false,
    labels: [{ name: '새로운 이슈', color: '#1d76db' }],
  },
];

const IssueList = () => {
  const [checkedState, setCheckedState] = useState(
    tempIssueData.map((issueData) => {
      return { id: issueData.id, isChecked: false };
    })
  );

  const issueContents = tempIssueData.map((issueData, index) => {
    return (
      <IssueContent
        key={`issue${issueData.id}-${index}`}
        data={issueData}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
    );
  });

  const allCheckHandler = (e) => {
    setCheckedState(
      checkedState.map((element) => {
        element.isChecked = e.target.checked;
        return element;
      })
    );
  };

  const getCountChecked = () => {
    return checkedState.reduce((count, checked) => {
      if (checked.isChecked) count++;
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
            onChange={(e) => allCheckHandler(e)}
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
      <section>{issueContents}</section>
    </IssueSection>
  );
};

export default IssueList;
