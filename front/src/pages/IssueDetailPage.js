import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from '../components/IssueTitle';
import IssueStatusChangeButton from '../components/IssueStatusChangeButton';
import { useContext } from 'react';
import styled from 'styled-components';
import AssigneesSelector from '../components/AssigneesSelector';
import CommentWriteSection from './../components/CommentWriteSection';
import LabelsSelector from './../components/LabelsSelector';

export const IssueContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'toggle_status':
      if (state.status == false) {
        console.log('false to true');
        return { status: true };
      }
      console.log('true to false');
      return { status: false };
    default:
      return state;
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

const IssueDetailPage = () => {
  const { id } = useParams();

  //params에 따라 들어가는 값이 달라진다.
  const [issueInfo, dispatch] = useReducer(reducer, { status: true });

  //TODO: id로 api 호출 후 적절한 렌더링

  return (
    <>
      <div>Issue detail Page</div>
      <IssueContext.Provider value={{ issueInfo, dispatch }}>
        <IssueTitle />
        <BodyDiv>
          <LeftDiv>
            <TempDiv>개발중ㅋㅋㅋ</TempDiv>
            <CommentWriteSection />
          </LeftDiv>
          <RightDiv>
            <AssigneesSelector />
            <LabelsSelector />
          </RightDiv>
        </BodyDiv>
        <IssueStatusChangeButton />
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
