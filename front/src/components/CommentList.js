import React, { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { CommentContext } from '../pages/IssueDetailPage';
import CommentAPI from '../apis/comment.api';
import Comment from '../components/Comment';

const CommentList = () => {
  const { commentInfo } = useContext(CommentContext);

  return (
    <>
      {commentInfo.map((comment, i) => {
        return <Comment key={`comment${comment.id}${i}`} data={comment} />;
      })}
    </>
  );
};

export default CommentList;
