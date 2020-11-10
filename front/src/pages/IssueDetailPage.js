import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from '../components/IssueTitle';
import IssueStatusChangeButton from '../components/IssueStatusChangeButton';
import { useContext } from 'react';
import styled from 'styled-components';
import AssigneesSelector from '../components/AssigneesSelector';
import CommentWriteSection from './../components/CommentWriteSection';
import LabelsSelector from './../components/LabelsSelector';

import axios from 'axios';
export const IssueContext = React.createContext();

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
  default:
    return issue;
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
  /* width: 1500px; */
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
`;

const TempDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 100px;
  margin-bottom: 10px;
  background-color: grey;
`;

const getIssues = async () => {
  const options = {
    method: 'get',
    url: '/issue',
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
};

const getIssue = (id, issues) => {
  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });
  return issue;
};

const IssueDetailPage = () => {
  const { id } = useParams();

  const [issueInfo, dispatch] = useReducer(reducer, {});

  useEffect(async () => {
    const issues = await getIssues();
    const issue = getIssue(id, issues);
    dispatch({ type: 'set_issue', payload: issue });
  }, []);

  return (
    <>
      <div>Issue detail Page</div>
      <IssueContext.Provider value={{ issueInfo, dispatch }}>
        <IssueTitle />
        <BodyDiv>
          <LeftDiv>
            <TempDiv>개발중</TempDiv>
            <CommentWriteSection />
          </LeftDiv>
          <RightDiv>
            <AssigneesSelector />
            <LabelsSelector />
          </RightDiv>
        </BodyDiv>
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
