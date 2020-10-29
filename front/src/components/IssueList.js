import React, { useReducer } from 'react';
import styled from 'styled-components';
import IssueContent from './IssueContent';
import SelectedCount from './SelectedCount';

const IssueSection = styled.section`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
`;

const AllCheckDiv = styled.div`
  margin-right: 16px;
`;

const ExtraHeader = styled.div`
  display: block;
  flex: auto;
`;

const RightFloatDiv = styled.div`
  float: right;
`;

const tempIssueData = [
  {
    title: 'First Issue',
    id: 1,
    date: new Date('2020/10/27 11:00'),
    author: 'rockpell',
    statusOpenClosed: true,
    labels: [
      { name: '이슈 목록 화면', color: '#77b21e' },
      { name: '이슈 상세 화면', color: '#eccf9e' },
    ],
  },
  {
    title: 'Second Issue',
    id: 2,
    date: new Date('2020/10/28 12:00'),
    author: 'rockpell',
    statusOpenClosed: true,
    labels: [{ name: '이슈 목록 화면', color: '#77b21e' }],
  },
  {
    title: 'Third Issue',
    id: 3,
    date: new Date('2020/10/28 14:00'),
    author: 'rockpell',
    statusOpenClosed: false,
    labels: [{ name: '새로운 이슈', color: '#1d76db' }],
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
  }
}

const allCheckHandler = (e, dispatch) => {
  if (e.target.checked) {
    dispatch({ type: 'INCREMENT' });
  } else {
    dispatch({ type: 'DECREMENT' });
  }
};

const checkHandler = (e) => {
  console.log('e.target.checked: ', e.target.checked);
};

const initialState = { count: 0 };

const IssueList = () => {
  const isVisible = true;
  const [state, dispatch] = useReducer(reducer, initialState); // checkHandler와 연계 예정
  const issueContents = tempIssueData.map((issueData, index) => {
    return (
      <IssueContent key={`issue${issueData.id}-${index}`} data={issueData} />
    );
  });

  const dropDownTags = (
    <RightFloatDiv>
      <span>Author &nbsp;</span>
      <span>Label &nbsp;</span>
      <span>Milestones &nbsp;</span>
      <span>Assignee &nbsp;</span>
    </RightFloatDiv>
  );

  const markAs = (
    <RightFloatDiv>
      <span>Mark as</span>
    </RightFloatDiv>
  );

  return (
    <IssueSection>
      <Header>
        <AllCheckDiv>
          <input
            type="checkbox"
            name="all-issue"
            value="all"
            onChange={(e) => allCheckHandler(e, dispatch)}
          />
        </AllCheckDiv>
        {!(state.count > 0) ? (
          <ExtraHeader>{dropDownTags}</ExtraHeader>
        ) : (
          <ExtraHeader>
            <SelectedCount count={state.count} />
            {markAs}
          </ExtraHeader>
        )}
      </Header>
      <section>{issueContents}</section>
    </IssueSection>
  );
};

export default IssueList;
