import React, { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { CommentContext } from '../pages/IssueDetailPage';
import { UserInfoContext } from './../App';
import CommentAPI from '../apis/comment.api';

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
    border-right: 10px solid ${(props) => props.authorColor || '#acc9eaad'};
    border-bottom: 4.5px solid transparent;
    z-index: 1;
  }

  :before {
    content: ' ';
    position: absolute;
    left: -11px;
    top: 10px;
    border-top: 5px solid transparent;
    border-right: 10px solid #acc9eaad;
    border-bottom: 5px solid transparent;
    z-index: 0;
  }
`;

const Header = styled.div`
  // padding: 5px;
  position: relative;
  border-radius: 1px;
  height: 40px;

  background-color: ${(props) => props.authorColor || '#acc9eaad'};
`;
const Tab = styled.div`
  position: absolute;
  background-color: white;
  padding: 6px;
  border: 1px solid transparent;
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

const OwnderDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
`;

const HeaderInnerDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const HeaderInnerDiv2 = styled.div`
  display: flex;
`;

const EditButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: bold;
  margin-left: 5px;
`;

const CancelButton = styled.button`
  background-color: #fafbfc;
  border: 1px solid #d9dadc;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const CommentWrap = styled.div`
  margin: 20px 0;
`;

const Comment = ({ data }) => {
  const [isEditMode, editMode] = useState(false);
  const { commentDispatch } = useContext(CommentContext);
  const { userInfo } = useContext(UserInfoContext);
  const authorizedUserId = userInfo.authorizedUserId;
  const userName = data.user ? data.user.name : '';
  const authorColor =
    data.user && data.user.github_id === authorizedUserId ? '#acc9eaad' : '#F6F8FA';
  const checkAuthor =
    data.user && data.user.github_id === authorizedUserId ? true : false;
  const imageURL = data.user ? data.user.profile_url : defaultUserImageUrl;

  const inputRef = useRef();

  const changeToEditMode = () => {
    editMode(true);
  };
  const changeToDefaultMode = () => {
    editMode(false);
  };

  const updateComment = () => {
    const newCommentContent = inputRef.current.value;
    commentDispatch({
      type: 'edit_comment_content',
      payload: { content: newCommentContent, commentId: data.id },
    });
    CommentAPI.editComment(data.id, newCommentContent);
    editMode(false);
  };

  return (
    <>
      <CommentWrap
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Img src={imageURL} alt="user" />
        <Box authorColor={authorColor}>
          <Header authorColor={authorColor}>
            {!isEditMode ? (
              <HeaderInnerDiv1>
                {userName} commented
                {checkAuthor ? (
                  <HeaderInnerDiv2>
                    <OwnderDiv> owner </OwnderDiv>
                    <EditButton onClick={changeToEditMode}>Edit</EditButton>
                  </HeaderInnerDiv2>
                ) : (
                  <></>
                )}
              </HeaderInnerDiv1>
            ) : (
              <Tab>Write</Tab>
            )}
          </Header>

          <LowerContainer>
            {!isEditMode ? (
              <>{data.comment}</>
            ) : (
              <>
                <TextArea
                  type="text"
                  ref={inputRef}
                  defaultValue={data.comment}
                  placeholder="Leave a comment"
                  // onChange={handleTextInputChange}
                />
                <ButtonBox>
                  <CancelButton onClick={changeToDefaultMode}>
                    Cancel
                  </CancelButton>
                  <Button
                    background="#2c974b"
                    color="#ffffff"
                    border="1px solid #2c974b"
                    onClick={updateComment}
                  >
                    Update comment
                  </Button>
                </ButtonBox>
              </>
            )}
          </LowerContainer>
        </Box>
      </CommentWrap>
    </>
  );
};

export default Comment;
