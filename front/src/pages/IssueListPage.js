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
      return payload
        .map((issue) => {
          return { ...issue, isChecked: false };
        })
        .sort((a, b) => (a.id > b.id ? -1 : 1));
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

const authorListReducer = (authorList, { type, payload }) => {
  switch (type) {
    case 'setInitial':
      return payload
        .map((author) => {
          return { ...author, isChecked: false };
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'check':
      const [checkedAuthor] = authorList.filter((author) => author.isChecked);
      if (checkedAuthor !== undefined && checkedAuthor.id === payload.id)
        return authorList.map((author) => {
          return { ...author, isChecked: false };
        });
      return authorList
        .map((author) => {
          return {
            ...author,
            isChecked: author.id === payload.id ? true : false,
          };
        })
        .sort((a, b) => {
          if (a.isChecked) return -1;
          if (b.isChecked) return 1;
          return a.name > b.name ? 1 : -1;
        });
  }
};

export const IssueListContext = createContext();
export const AuthorListContext = createContext();

const IssueListPage = () => {
  const [issueList, issueListDispatch] = useReducer(issueListReducer, []);
  const [authorList, authorListDispatch] = useReducer(authorListReducer, []);

  useEffect(async () => {
    const issues = await issueAPI.getIssues();
    issueListDispatch({ type: 'setInitial', payload: issues });

    const authors = await userAPI.getUsers();
    authorListDispatch({ type: 'setInitial', payload: authors });
  }, []);

  return (
    <>
      <IssueListContext.Provider value={{ issueList, issueListDispatch }}>
        <AuthorListContext.Provider value={{ authorList, authorListDispatch }}>
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
        </AuthorListContext.Provider>
      </IssueListContext.Provider>
    </>
  );
};

export default IssueListPage;
