import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from '../components/IssueTitle';
import IssueStatusChangeButton from '../components/IssueStatusChangeButton';
import { useContext } from 'react';

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
        <IssueStatusChangeButton />
      </IssueContext.Provider>
    </>
  );
};

export default IssueDetailPage;
