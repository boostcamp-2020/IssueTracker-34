import React from 'react';
import styled from 'styled-components';
import IssueList from '../components/IssueList';
import FilterButton from '../components/FilterButton';
import FilterSearchBar from '../components/FilterSearchBar';
import LabelsButton from '../components/LabelsButton';
import MilestonesButton from '../components/MilestonesButton';
import NewIssueButton from '../components/NewIssueButton';

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

const IssueListPage = () => {
  return (
    <>
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
    </>
  );
};

export default IssueListPage;
