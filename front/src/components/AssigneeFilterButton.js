import React, { useState, useContext, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import Check from '../svgs/CheckSvg';
import { IssueListPageContext } from './../pages/IssueListPage';

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
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
`;

const AssigneeName = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  color: #000;
`;

const AssignedNobody = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
  color: #000;
`;

const Unchecked = styled.div`
  width: 16px;
  height: 16px;
`;

const AssigneeFilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { assigneeList, assigneeListDispatch } = useContext(
    IssueListPageContext
  );

  const assigneeFilterList = assigneeList.map((assignee) => {
    return (
      <Fragment key={`assignee-filter-${assignee.id}`}>
        <DropDownListItem
          onClick={() => {
            assigneeListDispatch({
              type: 'check',
              payload: { id: assignee.id },
            });
            setIsOpen(false);
          }}
        >
          {assignee.isChecked ? <Check /> : <Unchecked />}
          {assignee.id ? (
            <>
              <Avatar src={assignee.profile_url}></Avatar>
              <AssigneeName>{assignee.name}</AssigneeName>
            </>
          ) : (
            <AssignedNobody>Assigned to nobody</AssignedNobody>
          )}
        </DropDownListItem>
        <Hr />
      </Fragment>
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
            <DropDownListWrapper>{assigneeFilterList}</DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
    </AssigneeFilterDiv>
  );
};

export default AssigneeFilterButton;
