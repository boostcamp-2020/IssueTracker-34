import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import OpenedSvg from '../svgs/OpenedSvg';
import ClosedSvg from '../svgs/ClosedSvg';
import { CommentContext } from '../pages/IssueDetailPage';
import { IssueContext } from '../App';
import IssueInfo from '../components/IssueInfo';
import IssueAPI from '../apis/issue.api';
import IssuesHeader from './IssuesHeader';

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

const IssueTitle = ({ issues, setIssues, syncIssues }) => {
  const [isEditMode, editTitle] = useState(false);
  const { commentInfo } = useContext(CommentContext);

  const inputRef = useRef(false);

  const issueTitle = issues.title;
  const issueNumber = issues.id;
  const creator = issues.user ? issues.user.name : '';
  const makeDate = issues.date ? issues.date : Date.now();
  const commentCount = commentInfo ? commentInfo.length : 0;
  const editTitle_ = () => {
    editTitle(true);
  };

  const saveTitle = async () => {
    const newTitle = inputRef.current.value;
    if (newTitle === '') {
      return;
    }
    setIssues({ ...issues, title: newTitle });
    await IssueAPI.editIssueTitle(issueNumber, newTitle);
    editTitle(false);
  };

  const cancelEdit = () => {
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
        {issues.status_open_closed == 1 ? (
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
      </IssueInfoDiv>
    </div>
  );
};

export default IssueTitle;
