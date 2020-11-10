import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import OpenedSvg from '../svgs/OpenedSvg';
import ClosedSvg from '../svgs/ClosedSvg';
import { IssueContext } from '../pages/IssueDetailPage';
import IssueInfo from '../components/IssueInfo';

const TitleWrap = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
  height: 60px;
`;

const Title = styled.h1`
  width: 80%;
`;

const EditButton = styled.button`
  width: 47px;
  height: 28px;
  background-color: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f6f8fa;
    color: black;
  }
`;

const SaveButton = styled.button`
  width: 63px;
  height: 32px;
  background-color: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;

const CancelButton = styled.button`
  width: 63px;
  height: 32px;
  background-color: white;
  color: blue;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TitleInput = styled.input`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  height: 32px;
  background-color: #fafbfc;
  color: #586069;
  margin-right: 10px;
  width: 80%;

  &:focus {
    outline: none;
    border-color: #0366d6;
    background-color: white;
    box-shadow: 0 0 0 2px #79b8ff;
  }
`;

const IssueNumber = styled.span`
  color: #6a737d;
  margin-left: 10px;
  font-weight: 100;
`;

const Span = styled.span`
  color: black;
  font-weight: 400;
`;

const IssueStateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;
  color: white;
  background-color: ${(props) => props.backgroundColor || 'green'};
  border-radius: 20px;
  margin-right: 5px;
`;

const IssueInfoDiv = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
`;

const IssueTitle = () => {
  const [isEditMode, editTitle] = useState(false);
  const { issueInfo, dispatch } = useContext(IssueContext);
  //const [title, setTitle] = useState('temp');

  // 개발용
  console.log('issue 정보', issueInfo);

  const inputRef = useRef(false);

  const issueTitle = issueInfo.title;
  const issueNumber = issueInfo.id;
  // setTitle(issueInfo.title);
  const creator = issueInfo.user ? issueInfo.user.name : ''; //issueInfo.user.name; //
  const makeDate = issueInfo.date ? issueInfo.date : Date.now();
  const commentCount = '3'; //따로 가져와야겠네.

  const editTitle_ = () => {
    editTitle(true);
  };

  const saveTitle = () => {
    const newTitle = inputRef.current.value;
    if (newTitle === '') {
      //개발용
      console.log('빈 제목은 save 불가.');
      return;
    }

    //개발용
    console.log(inputRef.current.value, '를 title로 저장했어요.');

    dispatch({ type: 'change_title', payload: { title: newTitle } });
    editTitle(false);
  };

  const cancelEdit = () => {
    //개발용
    console.log('취소합니다.');
    editTitle(false);
  };

  return (
    <div>
      {!isEditMode ? (
        <TitleWrap>
          <Title>
            <Span>{issueTitle}</Span>
            <IssueNumber>#{issueNumber}</IssueNumber>
          </Title>
          <EditButton onClick={editTitle_}>Edit</EditButton>
        </TitleWrap>
      ) : (
        <TitleWrap>
          <TitleInput type="text" ref={inputRef} defaultValue={issueTitle} />
          <SaveButton onClick={saveTitle}>Save</SaveButton>
          <CancelButton onClick={cancelEdit}>Cancel</CancelButton>
        </TitleWrap>
      )}

      <IssueInfoDiv>
        {issueInfo.status_open_closed == 1 ? (
          <IssueStateWrap backgroundColor={'#28a745'}>
            <OpenedSvg marginRight={'4px'} /> <div>Open</div>
          </IssueStateWrap>
        ) : (
          <IssueStateWrap backgroundColor={'#d73a49'}>
            {' '}
            <ClosedSvg marginRight={'4px'} />
            <div>Close</div>
          </IssueStateWrap>
        )}

        <IssueInfo
          makeDate={makeDate}
          author={creator}
          commentCount={commentCount}
        />

        {/* <div>
          {creator} opened this issue {passedDate} days ago · {commentCount}{' '}
          comments
        </div> */}
      </IssueInfoDiv>
    </div>
  );
};

export default IssueTitle;
