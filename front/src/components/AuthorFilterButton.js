import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import Check from '../svgs/Check';

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
  position: relative;
  cursor: pointer;
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

const DropdownMenu = styled.div`
  position: absolute;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  transform: translate(0px, 10px);
  width: 230px;
  padding: 0;
  z-index: 99;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
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

const AuthorId = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  color: #000;
`;

const AuthorName = styled.span`
  font-size: 12px;
  color: #6a737d;
`;

const FilterLink = styled(Link)`
  text-decoration: none;
`;

const Unchecked = styled.div`
  width: 16px;
  height: 16px;
`;

// 개발용 임시 데이터
const tempAuthors = [
  {
    id: 'apple',
    name: 'app',
    profileUrl: 'https://avatars2.githubusercontent.com/u/59037261?s=40&v=4',
  },
  { id: 'banana' },
  { id: 'chocolate', name: 'cho' },
];

const AuthorFilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkedAuthor = queryString.parse(window.location.search).author;

  const authorList = tempAuthors
    .sort((a, b) => {
      if (a.id === checkedAuthor) return -1;
      if (b.id === checkedAuthor) return 1;
      return a.id > b.id ? 1 : -1;
    })
    .map((author) => {
      const stringified = queryString.stringify({ author: author.id });
      const isSelected = checkedAuthor == author.id;

      return (
        <FilterLink
          to={isSelected ? `/issue/list` : `/issue/list?${stringified}`}
          key={author.id}
        >
          <DropDownListItem onClick={() => setIsOpen(false)}>
            {isSelected ? <Check /> : <Unchecked />}
            <Avatar src={author.profileUrl}></Avatar>
            <AuthorId>{author.id}</AuthorId>
            {author.name && <AuthorName>{author.name}</AuthorName>}
          </DropDownListItem>
          <Hr />
        </FilterLink>
      );
    });

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <span>Author </span>
        <DropDownIcon />
      </Button>
      {isOpen && (
        <>
          <DropDownOverlay onClick={() => setIsOpen(false)} />
          <DropdownMenu>
            <Header>
              <span>Filter by author</span>
              <DropDownCloseButton onClick={() => setIsOpen(false)}>
                ×
              </DropDownCloseButton>
            </Header>
            <Hr />
            <DropDownListWrapper>{authorList}</DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
    </div>
  );
};

export default AuthorFilterButton;
