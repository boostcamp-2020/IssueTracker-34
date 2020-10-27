import React from 'react';
import { useParams } from 'react-router-dom';

const IssueDetailPage = () => {
  const { id } = useParams();

  //TODO: id로 api 호출 후 적절한 렌더링

  return <div>Issue detail Page</div>;
};

export default IssueDetailPage;
