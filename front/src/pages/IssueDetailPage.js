import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from '../components/IssueTitle';
import { useContext } from 'react';
import styled from 'styled-components';
import AssigneesSelector from '../components/AssigneesSelector';
import IssueDetailContent from '../components/issueDetailContent';
import CommentList from '../components/CommentList';
import CommentWriteSection from './../components/CommentWriteSection';
import LabelsSelector from './../components/LabelsSelector';
import IssueAPI from '../apis/issue.api';
import CommentAPI from '../apis/comment.api';

// import axios from 'axios';
export const IssueContext = React.createContext();
export const CommentContext = React.createContext();

function reducer(issue, action) {
  switch (action.type) {
  case 'toggle_status':
    if (issue.status_open_closed == 0) {
      console.log('false to true');
      return { ...issue, status_open_closed: 1 };
    }
    console.log('true to false');
    return { ...issue, status_open_closed: 0 };
  case 'set_issue':
    return action.payload;
  case 'change_title':
    console.log('title 변경합니다');
    const newTitle = action.payload.title;
    return { ...issue, title: newTitle };
  case 'edit_issue_content':
    console.log('content 변경합니다');
    const newContent = action.payload.content;
    return { ...issue, content: newContent };
  default:
    return issue;
  }
}

function commentReducer(comments, action) {
  switch (action.type) {
  case 'set_comments':
    return action.payload;
  case 'edit_comment_content':
    const newComments = comments.map((comment) => {
      if (comment.id === action.payload.commentId) {
        comment.comment = action.payload.content;
        return comment;
      }
      return comment;
    });
    return newComments;
  case 'add_comment':
    return [...comments, action.payload];
  default:
    return comments;
  }
}

function commentCountReducer(commentCount, action) {
  switch (action.type) {
  case 'set_comment_count':
    return action.payload;
  case 'plus_commnet_count':
    return commentCount + 1;
  default:
    return commentCount;
  }
}

const tempData = {};

const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  margin-left: 2%;
`;

/*const getIssues = async () => {
  const API_URL = process.env.API_URL;

  const options = {
    method: 'get',
    url: API_URL + '/issue',
    headers: { accept: 'application/json' },
  };

  try {
    const { data } = await axios(options);
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Issues load failed..',
      text: 'Something went wrong!',
    });
    return [];
  }
};*/

const getIssue = (id, issues) => {
  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });
  return issue;
};

const IssueDetailPage = () => {
  const { id } = useParams();

  const [issueInfo, dispatch] = useReducer(reducer, {});
  const [commentInfo, commentDispatch] = useReducer(commentReducer, []);
  const [commentCount, commentCountDispatch] = useReducer(
    commentCountReducer,
    0,
  );

  useEffect(async () => {
    const issues = await IssueAPI.getIssues();
    const issue = getIssue(id, issues);
    dispatch({ type: 'set_issue', payload: issue });
  }, []);

  useEffect(async () => {
    const comments = await CommentAPI.getComments(id);
    commentDispatch({ type: 'set_comments', payload: comments });
  }, []);

  useEffect(async () => {
    const allComment = await CommentAPI.getAllComments();
    commentCountDispatch({
      type: 'set_comment_count',
      payload: allComment.length,
    });
  });

  return (
    <>
      <IssueContext.Provider value={{ issueInfo, dispatch }}>
        <CommentContext.Provider
          value={{
            commentInfo,
            commentCount,
            commentDispatch,
            commentCountDispatch,
          }}
        >
          <IssueTitle />
          <BodyDiv>
            <LeftDiv>
              <IssueDetailContent />
              <CommentList />
              <CommentWriteSection />
            </LeftDiv>
            <RightDiv>
              <AssigneesSelector />
              <LabelsSelector />
            </RightDiv>
          </BodyDiv>
        </CommentContext.Provider>
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
