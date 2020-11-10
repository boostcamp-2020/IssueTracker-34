import React, { useEffect, useReducer, createContext } from 'react';
import styled from 'styled-components';
import IssueList from '../components/IssueList';
import FilterButton from '../components/FilterButton';
import FilterSearchBar from '../components/FilterSearchBar';
import LabelsButton from '../components/LabelsButton';
import MilestonesButton from '../components/MilestonesButton';
import NewIssueButton from '../components/NewIssueButton';

import issueAPI from './../apis/issue.api';

const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const InnerFilterDivOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
`;

const InnerFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
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

const IssueListPage = () => {
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

  return (
    <>
      <IssueContext.Provider value={{ issueList, issueListDispatch }}>
        <div>
          <FilterDiv>
            <InnerFilterDivOne>
              <FilterButton />
              <FilterSearchBar />
            </InnerFilterDivOne>
            <InnerFilterDiv>
              <LabelsButton />
              <MilestonesButton />
            </InnerFilterDiv>
            <NewIssueButton />
          </FilterDiv>
          <IssueList />
        </div>
      </IssueContext.Provider>
    </>
  );
};

export default IssueListPage;
