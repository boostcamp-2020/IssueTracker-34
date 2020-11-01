import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import LabelSvg from "../svgs/LabelSvg";

const MyLink = styled(Link) `
    text-decoration:none;
` 

const MyButton = styled.button  `
    background-color:white;
    width:93px;
    height:30px;
    border:1px solid #e1e4e8;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    font-weight:bold;

    &:hover {
        background-color: #f6f8fa;
        color: black;
    }
`

const WrapDiv = styled.div `
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`

const ButtonName = styled.div `
    margin-left:3px;
`

const StyledDiv = styled.div `
    background-color:grey;
    color:white;
    border-radius:30px;
    width:15px;
    height:15px;
    margin:3px;
`

const LabelsButton = () => {
    let count = 3;
    return (
        <MyLink to="/label/list">
            <MyButton>
                <WrapDiv>
                     <LabelSvg/>
                     <ButtonName>Labels</ButtonName>
                     <StyledDiv>3</StyledDiv>
                </WrapDiv>
            </MyButton>
        </MyLink>
    );
}

export default LabelsButton;