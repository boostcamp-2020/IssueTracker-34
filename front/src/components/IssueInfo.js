import React from 'react';

const IssueInfo = ({ issueId, makeDate, author }) => {
  const nowDate = Date.now();
  const date = new Date(makeDate);
  const agoTime = Math.floor((nowDate - date.getTime()) / 1000 / 60);
  const agoHour = Math.floor(agoTime / 60);
  const agoDay = Math.floor(agoTime / 60 / 24);
  let agoText = '';

  if (agoTime < 1) {
    agoText = 'a few seconds';
  } else if (agoTime < 60) {
    agoText = `${agoTime} minute`;
  } else if (agoHour < 24) {
    agoText = `${agoHour} hours`;
  } else if (agoDay < 365) {
    agoText = `${agoDay} days`;
  } else {
    agoText = `${Math.floor(agoDay / 365)} years`;
  }

  return (
    <span>
      #{issueId} opened {agoText} ago by {author}
    </span>
  );
};

export default IssueInfo;
