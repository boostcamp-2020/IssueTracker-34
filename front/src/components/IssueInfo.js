import React from 'react';
import styled from 'styled-components';

const IssueInfo = ({ issueId, makeDate, author }) => {
  const nowDate = Date.now();
  const agoTime = Math.floor((nowDate - makeDate.getTime()) / 1000 / 60);
  const agoHour = Math.floor(agoTime / 60);
  const agoDay = Math.floor(agoTime / 60 / 24);
  let agoText = '';

  if (agoTime < 1) {
    agoText = 'a few seconds ago';
  } else if (agoTime < 60) {
    agoText = `${agoTime} minute ago`;
  } else if (agoHour < 24) {
    agoText = `${agoHour} hours ago`;
  } else if (agoDay < 365) {
    agoText = `${agoDay} days ago`;
  } else {
    agoText = `${Math.floor(agoDay / 365)} years ago`;
  }

  return (
    <span>
      #{issueId} opened {agoText} ago by {author}
    </span>
  );
};

export default IssueInfo;
