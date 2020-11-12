import React, { useEffect, useReducer, createContext } from 'react';
import styled from 'styled-components';
import IssueList from '../components/IssueList';
import FilterButton from '../components/FilterButton';
import FilterSearchBar from '../components/FilterSearchBar';
import LabelsButton from '../components/LabelsButton';
import MilestonesButton from '../components/MilestonesButton';
import NewIssueButton from '../components/NewIssueButton';
import issueAPI from './../apis/issue.api';
import userAPI from './../apis/user.api';
import IssueListPageReducer from './../reducers/IssueListPageReducer';

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

export const IssueListPageContext = createContext();

const IssueListPage = () => {
  const [issueList, issueListDispatch] = useReducer(
    IssueListPageReducer.issueListReducer,
    []
  );
  const [authorList, authorListDispatch] = useReducer(
    IssueListPageReducer.authorListReducer,
    []
  );
  const [assigneeList, assigneeListDispatch] = useReducer(
    IssueListPageReducer.assigneeListReducer,
    []
  );

  useEffect(async () => {
    const issues = await issueAPI.getIssues();
    issueListDispatch({ type: 'setInitial', payload: issues });

    const authors = await userAPI.getUsers();
    authorListDispatch({ type: 'setInitial', payload: authors });

    const assignees = await userAPI.getUsers();
    assigneeListDispatch({ type: 'setInitial', payload: assignees });
  }, []);

  return (
    <>
      <IssueListPageContext.Provider
        value={{
          issueList,
          issueListDispatch,
          authorList,
          authorListDispatch,
          assigneeList,
          assigneeListDispatch,
        }}
      >
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
      </IssueListPageContext.Provider>
    </>
  );
};

export default IssueListPage;
