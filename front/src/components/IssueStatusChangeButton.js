import React, { useContext } from 'react';
import styled from 'styled-components';
import ClosedSvg from '../svgs/ClosedSvg';
import { IssueContext } from '../pages/IssueDetailPage';

const InnerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: ${(props) => props.width || '127px'};
  height: 32px;
  background-color: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: #f6f8fa;
    color: black;
  }

  margin-top: 10px;
`;

const IssueStatusChangeButton = () => {
  //Todo: id에 맞는 title을 받아와서 useState에 기본값으로 저장한다.
  //변경된 title 값을 db에 저장한다.
  //이슈 번호, 이슈 상태, 생성자, 생성일, comment 정보 등을 가져와야 한다.

  const { issueInfo, dispatch } = useContext(IssueContext);

  const changeStatus = () => {
    dispatch({ type: 'toggle_status', payload: { status: issueInfo.status } });
  };

  return (
    <>
      {issueInfo.status === true ? (
        <Button onClick={changeStatus} width={'127px'}>
          <InnerButton>
            <ClosedSvg color={'#cb2431'} marginRight={'4px'} />
            <div>Close issue</div>
          </InnerButton>
        </Button>
      ) : (
        <Button onClick={changeStatus} width={'117px'}>
          <InnerButton>
            <div>Reopen issue</div>
          </InnerButton>
        </Button>
      )}
    </>
  );
};

export default IssueStatusChangeButton;
