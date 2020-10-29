import React from 'react';
import styled from 'styled-components';
import IssueContent from './IssueContent';

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
  const issueContents = tempIssueData.map((issueData, index) => {
    return (
      <IssueContent key={`issue${issueData.id}-${index}`} data={issueData} />
    );
  });

  return (
    <IssueSection>
      <Header>
        <div>
          <input type="checkbox" name="all-issue" value="all" />
        </div>
        <div>
          <span>Author &nbsp;</span>
          <span>Label &nbsp;</span>
          <span>Milestones &nbsp;</span>
          <span>Assignee &nbsp;</span>
        </div>
      </Header>
      <section>{issueContents}</section>
    </IssueSection>
  );
};

export default IssueList;
