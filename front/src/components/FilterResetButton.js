import React from 'react';
import styled from "styled-components";

import ClearFilterSvg from '../svgs/ClearFilterSvg'

const FilterResetButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    inline-size: fit-content;
    &:hover {
        color: #0366d6;
      svg {
        background-color: #0366d6;
      }
    }
`
const Text = styled.div`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 14px;
    line-height: 1.5;
`


const FilterResetButton = ({setFilterStatus}) => {
  const text = 'Clear current search query, filters, and sorts';
  console.log(ClearFilterSvg)
  const clearFilter = () => {
    // TODO: setFilterStatus 비스무리 한거 가져와서 적용 시키기
    // setFilterStatus(null);
    
    //임시 개발용 콘솔
    console.log('clicked clear filter')
  }

  return ( 
    <>
      <FilterResetButtonContainer onClick={()=> clearFilter()}>
        <ClearFilterSvg />  
        <Text>{text}</Text>
      </FilterResetButtonContainer>
    </>
  );


}

export default FilterResetButton;