import React from 'react';
import { Link } from 'react-router-dom';

const IssueListPage = () => {
  //개발용 임시 데이터
  const issues = [1, 2, 3];

  const issueList = issues.map((issueNumber) => {
    return (
      <div key={`issue${issueNumber}`}>
        <Link to={`/issue/${issueNumber}`}>issue {issueNumber}</Link>
      </div>
    );
  });

  return (
    <>
      <div>IssueListPage</div>
      <div>
        <Link to="/issue/make">Issue Make</Link>
      </div>
      <div>
        <Link to="/label/list">Label List </Link>
      </div>
      <div>
        <Link to="/milestone/list">milestone list </Link>
      </div>
      <div>{issueList}</div>
    </>
  );
};

export default IssueListPage;
