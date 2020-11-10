import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SettingSvg from '../svgs/SettingSvg';
import CheckSvg from '../svgs/CheckSvg';
import axios from 'axios';

const LabelsSelectorDiv = styled.div`
  position: relative;
  width: 20%;
`;

const LabelsButton = styled.button`
  display: flex;
  background-color: white;
  border: 0;
  width: 100%;
  height: 34px;
  flex-direction: rows;
  justify-content: space-between;
  align-items: center;
  outline: 0;
  &:hover {
    color: blue;
  }

  &:hover svg {
    fill: blue;
  }
`;

const DropDownOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 80;
  display: block;
  background: transparent;
`;

const slideDownAnimation = keyframes`{
  0% { opacity: 0; transform: translateY(-5%); }   
100% { opacity: 1; transform: translateY(0%); }
}`;

const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 12px;
  right: 0;
  bottom: auto;
  left: auto;
  width: 230px;
  top: 20px;
  padding: 0;
  z-index: 99;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  animation: ${slideDownAnimation} 0.1s ease-out;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  padding: 7px 9px 7px 16px;
  font-weight: 600;
  background-color: #fafbfc;
`;

const Hr = styled.hr`
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid #eee;

  margin-top: ${(props) => props.marginTop || '0'};
`;

const DropDownListWrapper = styled.div`
  max-height: 285px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 34px;
  margin: 0px 16px;
`;

const LabelInnerDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LabelDescription = styled.div`
  margin-left: 20px;
  font-size: 12px;
`;

const CheckedLabelDiv = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  font-size: 12px;
  margin-left: 6px;
`;

const CheckedLabelsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
`;

const CheckedLabelInnerDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || 'white'};
  width: 95%;
  height: 80%;
  color: white;
  border-radius: 3px;
  padding: 3px;
  font-size: 12px;
`;

const Unchecked = styled.div`
  width: 16px;
  height: 16px;
`;

const LabelColorDiv = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 2em;
  background-color: ${(props) => props.backgroundColor || 'grey'};
  margin-left: 8px;
  margin-right: 8px;
`;

const LabelId = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  color: #000;
`;

const tempData = [
  {
    id: 1,
    color: 'red',
    name: 'bug',
    checked: false,
    description: "Somthing isn't working",
  },
  {
    id: 2,
    color: 'blue',
    name: 'test',
    checked: false,
    description: '',
  },
];

const getLabels = async () => {
  const options = {
    method: 'get',
    url: '/label',
    headers: { accept: 'application/json' },
  };

  try {
    const { data } = await axios(options);
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Labels load failed..',
      text: 'Something went wrong!',
    });
    return [];
  }
};

const LabelsSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [labels, setLabel] = useState([]);

  useEffect(async () => {
    const labelData = await getLabels();
    setLabel(labelData);
  }, []);

  let checkedLabelsCnt = 0;
  const checkedLabels = labels.map((label, idx) => {
    if (label.checked) {
      checkedLabelsCnt++;
      return (
        <CheckedLabelsDiv key={idx}>
          <CheckedLabelInnerDiv backgroundColor={label.color}>
            {label.name}
          </CheckedLabelInnerDiv>
        </CheckedLabelsDiv>
      );
    }
  });

  const selectLabel = (id) => {
    const newLabels = labels.map((label) => {
      if (label.id === id) {
        label.checked = !label.checked;
      }
      return label;
    });

    setLabel(newLabels);
  };

  const allLabels = labels.map((label) => {
    return (
      <div key={label.id} onClick={() => selectLabel(label.id)}>
        <LabelDiv>
          <LabelInnerDiv>
            {label.checked ? <CheckSvg /> : <Unchecked />}
            <LabelColorDiv backgroundColor={label.color}></LabelColorDiv>
            <LabelId>{label.name}</LabelId>
          </LabelInnerDiv>
          {label.content !== '' ? (
            <LabelDescription>{label.content}</LabelDescription>
          ) : (
            <></>
          )}
        </LabelDiv>
        <Hr />
      </div>
    );
  });

  return (
    <LabelsSelectorDiv>
      <LabelsButton onClick={() => setIsOpen(true)}>
        <div>Labels</div>
        <SettingSvg />
      </LabelsButton>
      {checkedLabelsCnt === 0 ? (
        <CheckedLabelDiv>Not yet</CheckedLabelDiv>
      ) : (
        <> {checkedLabels} </>
      )}

      {isOpen && (
        <>
          <DropDownOverlay onClick={() => setIsOpen(false)} />
          <DropdownMenu>
            <Header>
              <span>Apply labels to this issue</span>
            </Header>
            <Hr />
            <DropDownListWrapper>{allLabels}</DropDownListWrapper>
          </DropdownMenu>
        </>
      )}
      <Hr marginTop={'15px'} />
    </LabelsSelectorDiv>
  );
};

export default LabelsSelector;
