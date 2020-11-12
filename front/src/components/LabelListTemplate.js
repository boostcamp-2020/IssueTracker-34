import React, { useState } from 'react';
import LabelModalEdit from '../components/LabelModalEdit';
import styled from 'styled-components';
import LabelAPI from '../apis/Labels.api';

const LabelContent = styled.div`  
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
`;

const LeftDiv = styled.div`
  width: 30%;
`;
const Box = styled.div`
  width: fit-content;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 5px;
  color: white;
  background-color:  ${(props) => props.backgroundColor || 'white'};
`;

const MiddleDiv = styled.div`
  width: 60%;
`;

const RightDiv = styled.div`
  display:flex;
  & > * {
    margin-left: 10px;
  }
`;


const LabelListTemplate = ({ label, getLabels }) => {
  const [open, setOpened] = useState(false);

  const changeOpenStatus = () => {
    setOpened(!open);
  }

  const deleteLabel = async(e) => {
    await LabelAPI.deleteLabel({ labelId: e.target.parentNode.dataset.id })
    await getLabels();
  }

  return (
    <>
      <LabelContent >
        <LeftDiv >
          <Box backgroundColor={label.color}>{label.name}</Box>
        </LeftDiv>
        <MiddleDiv>{label.content}</MiddleDiv>
        <RightDiv data-id={label.id}>
          <div onClick={changeOpenStatus}>Edit</div>
          <div onClick={deleteLabel} >Delete</div>
        </RightDiv>
      </LabelContent>
      {open && <LabelModalEdit changeLabelModalStatus={changeOpenStatus} getLabels={getLabels} inputInitialValue={label.name} descriptionInitialValue={label.content} colorInitialValue={label.color} labelId={label.id}/>}
    </>
  );
};

export default LabelListTemplate;