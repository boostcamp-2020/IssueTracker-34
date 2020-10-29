import React, {useState, useRef} from 'react';
import styled from "styled-components";
import OpenedSvg from "../svgs/OpenedSvg";
import ClosedSvg from "../svgs/ClosedSvg";

const TitleWrap = styled.div `
    display:flex;
    flex-direction:rows;
    align-items:center;
    height:60px;
`;

const Title = styled.h1 `
    width:80%;
`

const EditButton = styled.button `
    width:47px;
    height:28px;
    background-color:#FAFBFC;
    border:1px solid #e1e4e8;
    border-radius:6px;
`

const SaveButton = styled.button `
    width:63px;
    height:32px;
    background-color:#FAFBFC;
    border:1px solid #e1e4e8;
    border-radius:6px;
`

const CancelButton = styled.button `
    width:63px;
    height:32px;
    background-color:white;
    color:blue;
    border:none;

    &:hover {
        text-decoration:underline;

    }
`

const TitleInput = styled.input `
        border:1px solid #e1e4e8;
        border-radius:6px;
        height:32px;
        background-color:#FAFBFC;
        color:#586069;
        margin-right:10px;
        width:80%;

        &:focus { 
            outline:none;
            border-color:#0366d6;
            background-color:white;
            box-shadow:0 0 0 2px #79b8ff;
        }
    `

const IssueNumber = styled.span `
    color:#6A737D;
    margin-left:10px;
    font-weight:100;
`;

const Span = styled.span `
    color : black;
    font-weight:400;
`

const IssueStateWrap = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:80px;
    height:32px;
    color:white;
    background-color: ${(props) => props.backgroundColor || "green"};
    border-radius:20px;
    margin-right:5px;
`

const IssueInfo = styled.div`
    display:flex;
    flex-direction:rows;
    align-items:center;
`

const IssueTitle = () => {
    //Todo: id에 맞는 title을 받아와서 useState에 기본값으로 저장한다.
    //변경된 title 값을 db에 저장한다.
    //이슈 번호, 이슈 상태, 생성자, 생성일, comment 정보 등을 가져와야 한다.

    const [title, setTitle] = useState("my title");
    const [isEditMode, editTitle] = useState(false);
    //const [isOpened, setOpen] = useState(true);

    const inputRef = useRef(false);

    const isOpened = true;
    const issueNumber = 1;
    const creator = "temp";
    const passedDate = "2";
    const commentCount = "3";

    const editTitle_ =()=>{
        editTitle(true);
    }

    const saveTitle = ()=>{
        const newTitle = inputRef.current.value;
        if(newTitle==""){
            console.log("빈 제목은 save 불가.");
            return;
        }

        console.log(inputRef.current.value, '를 저장했어요.');
        setTitle(inputRef.current.value);
        editTitle(false);
    }

    const cancelEdit = ()=>{
        console.log('취소합니다.');
        editTitle(false);
    }

    return (
        <div>
          {!isEditMode ? (
            <TitleWrap>
                <Title><Span>{title}</Span><IssueNumber>#{issueNumber}</IssueNumber></Title>
                <EditButton onClick={editTitle_}>Edit</EditButton>
            </TitleWrap>
          ) : (
            <TitleWrap>
                <TitleInput type="text" ref={inputRef} defaultValue={title}/>
                <SaveButton onClick={saveTitle}>Save</SaveButton>
                <CancelButton onClick={cancelEdit}>Cancel</CancelButton>
            </TitleWrap>
          )}
          
          <IssueInfo>          
                {isOpened? (
                <IssueStateWrap backgroundColor={"#28a745"}>
                    <OpenedSvg/> <div>Open</div>
                </IssueStateWrap>
            ):(
                <IssueStateWrap backgroundColor={"#d73a49"}> <ClosedSvg/><div>Close</div>
                </IssueStateWrap> 
            )}
            <div>{creator} opened this issue {passedDate} days ago · {commentCount} comments</div>
          </IssueInfo>

        </div>
    );
}

export default IssueTitle