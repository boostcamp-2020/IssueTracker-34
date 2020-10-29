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

const AssigneeFilterDiv = styled.div`
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
  // top: auto;
  margin-top: 8px;
  right: 0;
  bottom: auto;
  left: auto;
  /* transform: translate(30px, 10px); */
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

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
`;

const AssigneeId = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  color: #000;
`;

const AssigneeName = styled.span`
  font-size: 12px;
  color: #6a737d;
`;

const AssignedNobody = styled.span`
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
const tempAssignee = [
  {
    id: 'apple',
    name: 'app',
    profileUrl: 'https://avatars2.githubusercontent.com/u/59037261?s=40&v=4',
  },
  { id: 'banana' },
  { id: 'chocolate', name: 'cho' },
];

const AssigneeFilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parsed = queryString.parse(window.location.search);
  const checkedAssignee = parsed.assignee;

  const assigneeList = [{ id: null }, ...tempAssignee]
    .sort((a, b) => {
      if (a.id === null) return -1;
      if (b.id === null) return 1;
      if (a.id === checkedAssignee) return -1;
      if (b.id === checkedAssignee) return 1;
      return a.id > b.id ? 1 : -1;
    })
    .map((assignee) => {
      const isSelected = checkedAssignee === assignee.id;
      const query = queryString.stringify({
        ...parsed,
        assignee: isSelected ? undefined : assignee.id,
      });

      return (
        <FilterLink to={`/issue/list?${query}`} key={assignee.id}>
          <DropDownListItem onClick={() => setIsOpen(false)}>
            {isSelected ? <Check /> : <Unchecked />}
            {assignee.id ? (
              <>
                <Avatar src={assignee.profileUrl}></Avatar>
                <AssigneeId>{assignee.id}</AssigneeId>
                {assignee.name && <AssigneeName>{assignee.name}</AssigneeName>}
              </>
            ) : (
              <AssignedNobody>Assigned to nobody</AssignedNobody>
            )}
          </DropDownListItem>
          <Hr />
        </FilterLink>
      );
    });

  return (
    <AssigneeFilterDiv>
      <Button onClick={() => setIsOpen(true)}>
        <span>Assignee </span>
        <DropDownIcon />
      </Button>
      {isOpen && (
        <>
          <DropDownOverlay onClick={() => setIsOpen(false)} />
          <DropdownMenu>
            <Header>
              <span>Filter by who's assigned</span>
              <DropDownCloseButton onClick={() => setIsOpen(false)}>
                ×
              </DropDownCloseButton>
            </Header>
            <Hr />
            <DropDownListWrapper>{assigneeList}</DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
    </AssigneeFilterDiv>
  );
};

export default AssigneeFilterButton;
