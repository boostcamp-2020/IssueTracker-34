import React, { useReducer, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from '../components/IssueTitle';
import styled from 'styled-components';
import AssigneesSelector from '../components/AssigneesSelector';
import IssueDetailContent from '../components/issueDetailContent';
import CommentList from '../components/CommentList';
import CommentWriteSection from './../components/CommentWriteSection';
import LabelsSelector from './../components/LabelsSelector';
import IssueAPI from '../apis/issue.api';
import CommentAPI from '../apis/comment.api';
import { IssueContext } from '../App';

// import axios from 'axios';
export const CommentContext = React.createContext();

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

// const getIssue = (id, issues) => {
//   const issue = issues.find((issue) => {
//     return issue.id === Number(id);
//   });
//   return issue;
// };

const IssueDetailPage = () => {
  const { id } = useParams();
  const status = 'DetailPage';

  const [assignees, setAssignee] = useState([]);
  const [labels, setLabel] = useState([]);
  const [issues, setIssues] = useState();
  const [commentInfo, commentDispatch] = useReducer(commentReducer, []);
  const [commentCount, commentCountDispatch] = useReducer(
    commentCountReducer,
    0,
  );
  const { issueInfo, dispatch } = useContext(IssueContext);

  const syncIssues = async () => {
    const issues = await IssueAPI.getIssues();
    const [issue] = issues.filter((issue) => {
      return issue.id == id;
    });
    setIssues(issue);
    dispatch({ type: 'set_issue', payload: issues });
  };

  const getCommentsUseEffect = async() => {
    const comments = await CommentAPI.getComments(id);
    commentDispatch({ type: 'set_comments', payload: comments });

    if (!issues) {
      await syncIssues();
    }
  }

  useEffect(() => {
    getCommentsUseEffect();
    getAllCommentsUseEffect();

  }, []);

  const getAllCommentsUseEffect = async() => {
    const allComment = await CommentAPI.getAllComments();
    commentCountDispatch({
      type: 'set_comment_count',
      payload: allComment.length,
    });
  }




  return (
    <>
      <CommentContext.Provider
        value={{
          commentInfo,
          commentCount,
          commentDispatch,
          commentCountDispatch,
        }}
      >
        {issues && (
          <IssueTitle
            issues={issues}
            setIssues={setIssues}
            syncIssues={syncIssues}
          />
        )}
        <BodyDiv>
          <LeftDiv>
            <IssueDetailContent issueId={id} />
            <CommentList />
            <CommentWriteSection
              issueId={id}
              issues={issues}
              setIssues={setIssues}
            />
          </LeftDiv>
          <RightDiv>
            <AssigneesSelector
              status={status}
              assignees={assignees}
              setAssignee={setAssignee}
              issueId={id}
            />
            <LabelsSelector
              status={status}
              labels={labels}
              setLabel={setLabel}
              issueId={id}
            />
          </RightDiv>
        </BodyDiv>
      </CommentContext.Provider>
    </>
  );
};

export default IssueDetailPage;
