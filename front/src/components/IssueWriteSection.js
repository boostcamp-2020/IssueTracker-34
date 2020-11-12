import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import issueAPI from '../apis/issue.api';
import Swal from 'sweetalert2';
import Box from './boxes/SpeechBox';
import Img from './boxes/ProfileBox';
import TextAreaBox from './boxes/TextAreaBox';

const defaultUserImageUrl =
  'https://Img.favpng.com/22/0/21/computer-icons-user-profile-clip-art-png-favpng-MhMHJ0Fw21MJadYjpvDQbzu5S.jpg';

const Header = styled.div`
  padding: 11px 5px 5px 5px;
  border-radius: 1px;
  border-bottom: 1px solid #e1e4e8;
`;

const Tab = styled.span`
  background-color: white;
  padding: 6px;
  border: 1px solid transparent;
  border-color: #e1e4e8;
  border-bottom: none;
  border-radius: 5px 5px 0px 0px;
  font-size: 10px;
`;

const TitleDiv = styled.div`
  padding: 10px 10px;
`;

const TitleInput = styled.input`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  height: 32px;
  background-color: #fafbfc;
  color: #586069;
  margin-right: 10px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #0366d6;
    background-color: white;
    box-shadow: 0 0 0 2px #79b8ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-color: #e1e4e8;
  background-color: #fafbfc;
  min-width: 20rem;
  min-height: 12rem;
  border-radius: 4px;
  margin-bottom: 8px;
  resize: vertical;
  &:focus {
    border: 0.5px solid #0366d6;
    box-shadow: 0px 0px 3px 2px #0366d680;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    margin-left: 6px;
    border-radius: 2px;
  }
`;

const LowerContainer = styled.div`
  width: 100%;
  padding: 10px 10px;
`;

const Button = styled.button`
  display: flex;
  outline: none;
  padding: 5px 10px;
  background: ${(props) => props.background || '#fafbfc'};
  color: ${(props) => props.color || 'black'};
  border: ${(props) => props.border || '1px solid #d9dadc'};
  cursor: ${(props) => props.cursor || 'initial'};
  &:hover {
    /* background-color: black; */
    background-color: ${(props) => props.hoverColor || props.background};
  }
  &:active {
    background-color: ${(props) => props.activeColor || props.background};
  }
`;

const CancelButton = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;

const getIds = (arr) => {
  return arr.filter((item) => item.checked).map((item) => item.id);
};

const IssueWriteSection = ({ userProfileURL, assignees, labels }) => {
  // status 로 edit 인지 생성인지 구분
  // placeholder는 edit용 이전 썼던 글
  // userProfileURL 은 현제 로그인 유저의 이미지 주소
  const history = useHistory();
  const [textIsEmpty, setTextIsEmpty] = useState(true);

  const imageURL = userProfileURL ? userProfileURL : defaultUserImageUrl;
  const inputTitleRef = useRef();
  const inputContentRef = useRef();

  const handleTextInputChange = (e) => {
    if (e.target.value === '') {
      setTextIsEmpty(true);
      return;
    }
    setTextIsEmpty(false);
  };

  const submitIssue = async () => {
    try {
      const issueTitle = inputTitleRef.current.value;
      const issueText = inputContentRef.current.value;
      const issue = await issueAPI.createIssue({
        title: issueTitle,
        content: issueText,
        labels: getIds(labels),
        assignees: getIds(assignees),
      });

      history.push(`/issue/${issue.id}`);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Issue created failed..',
        text: 'Something went wrong!',
      });
    }
  };

  const cancelIssue = () => {
    history.push('/issue/list');
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
          <TitleDiv>
            <TitleInput
              type="text"
              ref={inputTitleRef}
              placeholder="Title"
              onChange={handleTextInputChange}
            />
          </TitleDiv>
          <Header>
            <Tab>Write</Tab>
          </Header>
          <LowerContainer>
            <TextAreaBox inputContentRef={inputContentRef} />
            <ButtonBox>
              <CancelButton onClick={cancelIssue}>Cancel</CancelButton>
              {textIsEmpty ? (
                <>
                  <Button
                    background="#94d3a2"
                    color="#ffffffcc"
                    border="1px solid #1b1f231a"
                  >
                    Submit new issue
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    background="#2c974b"
                    color="#ffffff"
                    border="1px solid #2c974b"
                    onClick={submitIssue}
                    cursor="pointer"
                  >
                    Submit new issue
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

export default IssueWriteSection;
