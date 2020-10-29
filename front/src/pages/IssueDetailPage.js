import React from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from "../components/IssueTitle";

const IssueDetailPage = () => {
  const { id } = useParams();

  //TODO: id로 api 호출 후 적절한 렌더링

  return (<>
    <div>Issue detail Page</div>
    <IssueTitle />
  </>);
};

export default IssueDetailPage;
