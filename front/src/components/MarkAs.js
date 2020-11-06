import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


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

const MarkAsDiv = styled.div`
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
  :hover {
    background-color: blue;
    > * {
      color: white;
    }
  }
`;


const MarkItem = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  color: #000;
`;


// TODO: setMarkedStatus 받고 바꿔 쓰기
// const MarkAs = ({ setMarkedStatus }) => {
const MarkAs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setMarkedStatus = (status) => {
    // setMarkedStatus(status);
    setIsOpen(false);
  }

  return (
    <MarkAsDiv>
      <Button onClick={() => setIsOpen(true)}>
        <span>Mark as </span>
        <DropDownIcon />
      </Button>
      {isOpen && (
        <>
          <DropDownOverlay onClick={() => setIsOpen(false)} />
          <DropdownMenu>
            <Header>
              <span>Action</span>
              <DropDownCloseButton onClick={() => setIsOpen(false)}>
                ×
            </DropDownCloseButton>
            </Header>
            <Hr />
            <DropDownListWrapper>
              <DropDownListItem onClick={()=> setMarkedStatus(1)}>
              <MarkItem >
                  open
              </MarkItem>
              </DropDownListItem>
                <DropDownListItem onClick={()=> setMarkedStatus(0)}>
                <MarkItem >
                  closed
              </MarkItem>
              </DropDownListItem>
            </DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
    </MarkAsDiv>
  );

}


export default MarkAs;