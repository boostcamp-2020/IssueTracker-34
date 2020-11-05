import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import queryString from 'query-string';
import Check from '../svgs/CheckSvg';

const DropDownIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
`;

const MilestoneFilterDiv = styled.div`
  position: relative;
  display: inline;
`;

const DropDownOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 80;
  display: block;
  background: transparent;
`;

const slideDownAnimation = keyframes`{
  0% { opacity: 0; transform: translateY(-5%); }   
100% { opacity: 1; transform: translateY(0%); }
}`;

const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 8px;
  right: 0;
  bottom: auto;
  left: auto;
  width: 230px;
  padding: 0;
  z-index: 99;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  animation: ${slideDownAnimation} 0.1s ease-out;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  padding: 7px 9px 7px 16px;
  font-weight: 600;
`;

const DropDownCloseButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid #eee;
`;

const DropDownListWrapper = styled.div`
  max-height: 285px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const DropDownListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 16px;
`;

const MilestoneTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
  color: #000;
`;

const NoMilestone = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
  color: #000;
`;

const FilterLink = styled(Link)`
  text-decoration: none;
`;

const Unchecked = styled.div`
  width: 16px;
  height: 16px;
`;

// 개발용 임시 데이터
const tempMilestone = [
  {
    id: 1,
    title: 'Week 1',
  },
  {
    id: 2,
    title: 'Week 2',
  },
  {
    id: 3,
    title: 'Week 3',
  },
];

const MilestoneFilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parsed = queryString.parse(window.location.search);
  const checkedMilestone =
    parsed.milestone !== null ? Number(parsed.milestone) : null;

  const milestoneList = [{ id: null }, ...tempMilestone]
    .sort((a, b) => {
      if (a.id === null) return -1;
      if (b.id === null) return 1;
      if (a.id === checkedMilestone) return -1;
      if (b.id === checkedMilestone) return 1;
      return a.id > b.id ? 1 : -1;
    })
    .map((milestone) => {
      const isSelected = checkedMilestone === milestone.id;
      const query = queryString.stringify({
        ...parsed,
        milestone: isSelected ? undefined : milestone.id,
      });

      return (
        <FilterLink to={`/issue/list?${query}`} key={milestone.id}>
          <DropDownListItem onClick={() => setIsOpen(false)}>
            {isSelected ? <Check /> : <Unchecked />}
            {milestone.id ? (
              <MilestoneTitle>{milestone.title}</MilestoneTitle>
            ) : (
              <NoMilestone>Issues with no milestone</NoMilestone>
            )}
          </DropDownListItem>
          <Hr />
        </FilterLink>
      );
    });

  return (
    <MilestoneFilterDiv>
      <Button onClick={() => setIsOpen(true)}>
        <span>Milestone </span>
        <DropDownIcon />
      </Button>
      {isOpen && (
        <>
          <DropDownOverlay onClick={() => setIsOpen(false)} />
          <DropdownMenu>
            <Header>
              <span>Filter by milestone</span>
              <DropDownCloseButton onClick={() => setIsOpen(false)}>
                ×
              </DropDownCloseButton>
            </Header>
            <Hr />
            <DropDownListWrapper>{milestoneList}</DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
    </MilestoneFilterDiv>
  );
};

export default MilestoneFilterButton;
