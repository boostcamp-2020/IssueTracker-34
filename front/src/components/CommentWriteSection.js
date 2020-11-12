import React, { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import ClosedSvg from '../svgs/ClosedSvg';
import { CommentContext } from '../pages/IssueDetailPage';
import { IssueContext } from '../App';
import IssueAPI from '../apis/issue.api';
import CommentAPI from '../apis/comment.api';

import axios from 'axios';

const defaultUserImageUrl =
  'https://Img.favpng.com/22/0/21/computer-icons-user-profile-clip-art-png-favpng-MhMHJ0Fw21MJadYjpvDQbzu5S.jpg';

const Box = styled.div`
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 14%);
  position: relative;
  border-radius: 2px;
  border: 1px #acc9ea solid;
  height: 150px;
  :after {
    content: ' ';
    position: absolute;
    left: -10px;
    top: 10.5px;
    border-top: 4.5px solid transparent;
    border-right: 10px solid #f6f8fa;
    border-bottom: 4.5px solid transparent;
    z-index: 1;
  }

  :before {
    content: ' ';
    position: absolute;
    left: -11px;
    top: 10px;
    border-top: 5px solid transparent;
    border-right: 10px solid #acc9ea;
    border-bottom: 5px solid transparent;
    z-index: 0;
  }
`;

const Header = styled.div`
  // padding: 5px;
  border-radius: 1px;
  background-color: #f6f8fa;
  height: 40px;
  position: relative;
`;
const Tab = styled.div`
  position: absolute;
  background-color: white;
  padding: 6px;
  border: 1px solid orange;
  border-color: #e1e4e8;
  border-bottom: none;
  border-radius: 5px 5px 0px 0px;
  font-size: 10px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
`;
const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-color: #e1e4e8;
  min-width: 20rem;
  min-height: 4rem;
  border-radius: 4px;
  margin-bottom: 8px;
  &:focus {
    border: 0.5px solid #0366d6;
    box-shadow: 0px 0px 3px 2px #0366d680;
  }
`;

const Img = styled.img`
  margin-top: 3px;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 50%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  & > * {
    margin-left: 6px;
    border-radius: 2px;
  }
`;

const LowerContainer = styled.div`
  width: 100%;
  padding: 6px 6px;
`;

const Button = styled.button`
  display: flex;
  outline: none;
  padding: 5px 10px;
  background: ${(props) => props.background || '#fafbfc'};
  color: ${(props) => props.color || 'black'};
  border: ${(props) => props.border || '1px solid #d9dadc'};
  &:hover {
    /* background-color: black; */
    background-color: ${(props) => props.hoverColor || props.background};
  }
  &:active {
    background-color: ${(props) => props.activeColor || props.background};
  }
`;

const createComment = async (userId, issueId, commentText) => {
  const API_URL = process.env.API_URL;

  const options = {
    method: 'post',
    url: API_URL + '/comment',
    headers: { accept: 'application/json' },
    data: {
      userId: userId,
      issueId: issueId,
      comment: commentText,
      date: Date.now(),
    },
  };

  try {
    const { data } = await axios(options);
    // 개발용. 데이터베이스에 잘 들어가면 나옴.
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Comment created failed..',
      text: 'Something went wrong!',
    });
    return [];
  }
};

const CommentWriteSection = ({
  userProfileURL,
  status,
  placeholder,
  issueId,
  issues,
  setIssues,
}) => {
  // status 로 edit 인지 생성인지 구분
  // placeholder는 edit용 이전 썼던 글
  // userProfileURL 은 현제 로그인 유저의 이미지 주소

  const { issueInfo, dispatch } = useContext(IssueContext);
  const {
    commentInfo,
    commentCount,
    commentDispatch,
    commentCountDispatch,
  } = useContext(CommentContext);

  const userId = 1; //로그인 후에 받아와야 함.

  const [textIsEmpty, setTextIsEmpty] = useState(true);

  //로그인한 사용자의 프로필 사진을 가져와야 합니다.
  const imageURL = userProfileURL ? userProfileURL : defaultUserImageUrl;
  const inputRef = useRef();

  const handleTextInputChange = (e) => {
    if (e.target.value === '') {
      setTextIsEmpty(true);
      return;
    }
    setTextIsEmpty(false);
  };

  const changeIssueStatus = () => {
    setIssues({ ...issues, status_open_closed: !issues.status_open_closed });
    IssueAPI.editIssueStatus(issueId, !issues.status_open_closed);
  };

  const addComment = () => {
    const commentText = inputRef.current.value;

    commentDispatch({
      type: 'add_comment',
      payload: {
        id: commentCount + 1,
        comment: commentText,
        date: Date.now(),
        issue_id: issueId,
        user: { id: userId, name: 'profornnan', profile_url: imageURL },
        user_id: userId,
      },
    });

    commentCountDispatch({
      type: 'plus_commnet_count',
    });
    CommentAPI.createComment(userId, issueId, commentText);
  };

  const changeStatusAndAddComment = () => {
    changeIssueStatus();
    //TODO: issue status 변화 API 호출
    addComment();
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Img src={imageURL} alt="user" />
        <Box>
          <Header>
            <Tab>Write</Tab>
          </Header>
          <LowerContainer>
            <TextArea
              type="text"
              ref={inputRef}
              placeholder="Leave a comment"
              onChange={handleTextInputChange}
            />
            <ButtonBox>
              {textIsEmpty ? (
                <>
                  <Button
                    hoverColor="#f3f4f6"
                    activeColor="#edeff2"
                    onClick={changeIssueStatus}
                  >
                    {issues && issues.status_open_closed == 0 ? (
                      <>Reopen issue</>
                    ) : (
                      <>
                        <ClosedSvg color={'red'} marginRight={'4px'} />
                        Close issue
                      </>
                    )}
                  </Button>

                  <Button
                    background="#94d3a2"
                    color="#ffffffcc"
                    border="1px solid #1b1f231a"
                  >
                    Comment
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    hoverColor="#f3f4f6"
                    activeColor="#edeff2"
                    onClick={changeStatusAndAddComment}
                  >
                    {issueInfo.status_open_closed == 0 ? (
                      <>Reopen and comment</>
                    ) : (
                      <>
                        <ClosedSvg color={'red'} marginRight={'4px'} />
                        Close with comment
                      </>
                    )}
                  </Button>
                  <Button
                    background="#2c974b"
                    color="#ffffff"
                    border="1px solid #2c974b"
                    onClick={addComment}
                  >
                    Comment
                  </Button>
                </>
              )}
            </ButtonBox>
          </LowerContainer>
        </Box>
      </div>
    </>
  );
};

export default CommentWriteSection;
