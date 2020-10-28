import React, {useRef} from 'react';
import styled from "styled-components";
import SearchSvg from "../svgs/SearchSvg";

const FilterSearchBar = () => {
    const inputRef = useRef(false);
    const initValue = "is:issue is:open";

    const SearchInput = styled.input `
        border:1px solid #e1e4e8;
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
        
        height:32px;
        background-color:#FAFBFC;
        color:#586069;
        padding-left:32px;

        &:focus { 
            outline:none;
            border-color:#0366d6;
            background-color:white;
            box-shadow:0 0 0 2px #79b8ff;
        }
    `

    const checkEnter = (e)=>{
        if(window.event.keyCode == 13){
            e.preventDefault();
    
            searchIssues();
        }
    }

    const searchIssues = () => {
        const content = inputRef.current.value;
        console.log(content);
        //TODO: content로 검색 결과 보이게 하기.
        //사용자가 입력한 것까지 검색되도록 하려면 parsing 필요.
    }

    return (
        <>
            <form action="">
               <SearchSvg/>
                <SearchInput type="text" ref={inputRef} defaultValue={initValue} placeholder="Search All Issues" onKeyPress={checkEnter}></SearchInput>
            </form>
        </>
);

}
export default FilterSearchBar;