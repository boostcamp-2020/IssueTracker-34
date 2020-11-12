import React, { useEffect, useState } from 'react';
import Label from '../apis/Labels.api';
import styled from 'styled-components';
import LabelsButton from '../components/LabelsButton';
import MilestonesButton from '../components/MilestonesButton';
import LabelModal from '../components/LabelModal';

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
`;

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

const NewLabelButton = styled.button`
  height: 100%;
  color: white;
  background:-webkit-gradient(linear, left top, left bottom, from(#31c854), to(#26973f));
  border: none;
  border-radius: 5px;
  outline: none;

  :hover {
    cursor:pointer;
  }
`;

const LabelHeader = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const LabelListPage = () => {

  const [labels, setLabels] = useState('');
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const getLabels = async() => {
    const labels1 = await Label.getLabels('');
    const labelCount = labels1.length;
    const parsedLabels = parseLabel(labels1, labelCount);
    setLabels(parsedLabels);
  }

  const changeLabelModalStatus = async() => {
    setModalIsOpened(!modalIsOpened);
  }

  const parseLabel = (labels, labelCount) => {
    const labelCountTemplate = <Header key={`labelCount${labelCount}`}>{labelCount} labels</Header>;

    const labelListTemplate = labels.map((label, i) => {
      return (
        <LabelContent key={`${label}${i}`}>
          <LeftDiv >
            <Box backgroundColor={label.color}>{label.name}</Box>
          </LeftDiv>

          <MiddleDiv>{label.content}</MiddleDiv>
          <RightDiv>
            <div>Edit</div>
            <div>Delete</div>
          </RightDiv>
        </LabelContent>)

    })
    return [labelCountTemplate, ...labelListTemplate];
  }

  useEffect(() => {
    getLabels();
  }, []);

  return (
    <>
      <LabelHeader>
        <LabelsButton />
        <MilestonesButton />
        <div style={{
          marginLeft: 'auto',
        }}>
          <NewLabelButton type='button' onClick={() => {
            changeLabelModalStatus()
          }}>New Label</NewLabelButton>
        </div>
      </LabelHeader>
      {modalIsOpened && <LabelModal changeLabelModalStatus={changeLabelModalStatus} getLabels={getLabels}/>}
      <div>{labels}</div>
    </>
  );
};

export default LabelListPage;
