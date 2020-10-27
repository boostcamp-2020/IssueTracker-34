import React from 'react';
import styled from 'styled-components';
import IssueContext from './IssueContent';

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

const IssueList = () => {
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
      <section>
        <IssueContext />
        <IssueContext />
      </section>
    </IssueSection>
  );
};

export default IssueList;
