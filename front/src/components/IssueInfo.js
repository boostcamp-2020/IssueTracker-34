import React from 'react';
import styled from 'styled-components';
import MilestoneSvg from '../svgs/MilestoneSvg';

const IssueInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MilestoneDiv = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const IssueInfo = ({ issueId, makeDate, author, commentCount, milestone }) => {
  const nowDate = Date.now();
  const date = new Date(makeDate);
  const agoTime = Math.floor((nowDate - date.getTime()) / 1000 / 60);
  const agoHour = Math.floor(agoTime / 60);
  const agoDay = Math.floor(agoTime / 60 / 24);
  let agoText = '';

  if (agoTime < 1) {
    agoText = 'a few seconds';
  } else if (agoTime < 60) {
    agoText = `${agoTime} minutes`;
  } else if (agoHour < 24) {
    agoText = `${agoHour} hours`;
  } else if (agoDay < 365) {
    agoText = `${agoDay} days`;
  } else {
    agoText = `${Math.floor(agoDay / 365)} years`;
  }

  return (
    <span>
      {issueId ? (
        <IssueInfoDiv>
          <span>
            #{issueId} opened {agoText} ago by {author}
          </span>
          {milestone && (
            <MilestoneDiv>
              <MilestoneSvg color="#C0C0C0" marginRight="5px" />
              <span>{milestone.title}</span>
            </MilestoneDiv>
          )}
        </IssueInfoDiv>
      ) : (
        <>
          {author} opened this issue {agoText} ago · {commentCount} comments
        </>
      )}
    </span>
  );
};

export default IssueInfo;
