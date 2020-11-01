import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LinkExternal from '../svgs/LinkExternalSvg';

const DropDownIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: 1px solid;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid #e1e4e8;
  height: 32px;
  background-color: #fafbfc;

  &:hover {
    background-color: #e1e4e8;
    color: black;
  }
`;

const slideDownAnimation = keyframes`{
  0% { opacity: 0; transform: translateY(-5%); }   
100% { opacity: 1; transform: translateY(0%); }
}`;

const FilterList = styled.section`
  border: 1px solid #ddd;
  margin: 8px 0 16px;
  font-size: 10px;
  border-radius: 6px;
  box-shadow: var(--color-shadow-large);
  position: absolute;
  background: white;
  width: 12rem;
  animation: ${slideDownAnimation} 0.1s ease-out;
`;

const Div = styled.div`
  padding: 3px 10px;
`;

const Div2 = styled.div`
  font-weight: 600;
  padding: 3px 10px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  border-bottom: 1px solid #ddd;
`;
const X = styled.span`
  margin-left: auto;
`;

const DropDownOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 80;
`;

const FilterButton = ({ setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFilterList = () => {
    setIsOpen(!isOpen);
  };
  const filterIssues = (filterType) => {
    //TODO: setFilters(filterType)
  };

  return (
    <div>
      <Button type="button" onClick={openFilterList}>
        Filters
        <DropDownIcon />
      </Button>
      {isOpen ? (
        <>
          <FilterList>
            <Div2>
              Filter issues
              <X onClick={() => openFilterList()}>×</X>
            </Div2>
            <Line />
            <Div onClick={() => filterIssues('Open issues and pull requests')}>
              Open issues and pull requests
            </Div>
            <Line />
            <Div onClick={() => filterIssues('Your issues')}>Your issues</Div>
            <Line />
            <Div onClick={() => filterIssues('Your pull requests')}>
              Your pull requests
            </Div>
            <Line />
            <Div onClick={() => filterIssues('Everything assinged to you')}>
              Everything assigned to you
            </Div>
            <Line />
            <Div onClick={() => filterIssues('Everything mentioning you')}>
              Everything mentioning you
            </Div>
            <Line />
            <Div2 onClick={() => filterIssues('View advanced search syntax')}>
              <LinkExternal /> View advanced search syntax
            </Div2>
          </FilterList>
          <DropDownOverlay onClick={() => openFilterList()} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterButton;
