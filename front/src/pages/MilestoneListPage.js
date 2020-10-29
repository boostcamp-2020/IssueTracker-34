import React from 'react';
import { Link } from 'react-router-dom';

const MilestoneListPage = () => {
  //개발용 임시 데이터
  const milestones = [1, 2, 3];

  const milestoneList = milestones.map((milestoneNumber) => {
    return (
      <div key={`milestone${milestoneNumber}`}>
        <Link to={`/milestone/${milestoneNumber}/edit`}>
          milestone edit {milestoneNumber}
        </Link>
      </div>
    );
  });

  return (
    <>
      <div>MilestoneListPage</div>
      <div>
        <Link to="/milestone/make">milestone make </Link>
      </div>
      {milestoneList}
    </>
  );
};

export default MilestoneListPage;
