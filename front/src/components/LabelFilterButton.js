import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import queryString from 'query-string';
import Check from '../svgs/CheckSvg';

import axios from 'axios';

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

const LabelFilterDiv = styled.div`
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
  width: 250px;
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
  padding: 7px 16px;
`;

const LabelInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
`;

const LabelColor = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin: 2px 8px;
  background-color: ${(props) => props.color || '#fff'};
`;

const LabelName = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LabelDescription = styled.span`
  font-size: 12px;
  color: #6a737d;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Unlabeled = styled.span`
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
const tempLabel = [
  {
    id: 1,
    name: 'bug',
    color: '#D73A4A',
    description: "Something isn't working",
  },
  {
    id: 2,
    name: 'documentation',
    color: '#0075CA',
    description: 'Improvements or additions to documentation',
  },
  {
    id: 3,
    name: '이슈 목록 화면',
    color: '#77b21e',
  },
];

const getLabels = async () => {
  const options = {
    method: 'get',
    url: '/label',
    headers: { accept: 'application/json' },
  };

  const db_data = await axios(options)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      return data;
    })
    .catch((err) => res.status(500).json({ message: err.message }));

  return db_data;
};

const LabelFilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parsed = queryString.parse(window.location.search);
  const checkedLabel = parsed.label !== null ? Number(parsed.label) : null;

  const [labels, setLabels] = useState([]);

  useEffect(async () => {
    const data_ = await getLabels();
    setLabels(data_);
  }, []);

  const labelList = [{ id: null }, ...labels]
    .sort((a, b) => {
      if (a.id === null) {
        return -1;
      }
      if (b.id === null) {
        return 1;
      }
      if (a.id === checkedLabel) {
        return -1;
      }
      if (b.id === checkedLabel) {
        return 1;
      }
      return a.id > b.id ? 1 : -1;
    })
    .map((label) => {
      const isSelected = checkedLabel === label.id;
      const query = queryString.stringify({
        ...parsed,
        label: isSelected ? undefined : label.id,
      });

      return (
        <FilterLink to={`/issue/list?${query}`} key={label.id}>
          <DropDownListItem onClick={() => setIsOpen(false)}>
            {isSelected ? <Check /> : <Unchecked />}
            {label.id ? (
              <>
                <LabelInfoDiv>
                  <LabelColor color={label.color} />
                </LabelInfoDiv>
                <LabelInfoDiv>
                  <LabelName>{label.name}</LabelName>
                  {label.content && (
                    <LabelDescription>{label.content}</LabelDescription>
                  )}
                </LabelInfoDiv>
              </>
            ) : (
              <Unlabeled>Unlabeled</Unlabeled>
            )}
          </DropDownListItem>
          <Hr />
        </FilterLink>
      );
    });

  return (
    <LabelFilterDiv>
      <Button onClick={() => setIsOpen(true)}>
        <span>Label </span>
        <DropDownIcon />
      </Button>
      {isOpen && (
        <>
          <DropDownOverlay onClick={() => setIsOpen(false)} />
          <DropdownMenu>
            <Header>
              <span>Filter by label</span>
              <DropDownCloseButton onClick={() => setIsOpen(false)}>
                ×
              </DropDownCloseButton>
            </Header>
            <Hr />
            <DropDownListWrapper>{labelList}</DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
    </LabelFilterDiv>
  );
};

export default LabelFilterButton;
