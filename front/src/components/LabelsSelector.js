import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import SettingSvg from '../svgs/SettingSvg';
import CheckSvg from '../svgs/CheckSvg';
import { IssueContext } from '../App';
import issueAPI from '../apis/issue.api';
import LabelAPI from '../apis/Labels.api';

const LabelsSelectorDiv = styled.div`
  position: relative;
  width: 100%;
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

const LabelsSelector = ({ status, labels, setLabel, issueId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { issueInfo, dispatch } = useContext(IssueContext);

  //맨 처음에 label의 데이터를 받아온다 -> checked 없는 상태
  //초기 setLabel이 된다.
  //issueInfo에서 데이터를 받아온다 -> 이 이슈의 label들이 뭐가 있는지 볼 수 있다.
  //라벨 리스트를 뽑는다.
  //그리고 맨 처음 화면에 보여주려하는데 렌더링이 너무 많이 돼서 안보인다.

  //제일 늦게 가져와집니다.
  let issueLabels = [];
  if (issueInfo.labels) {
    issueInfo.labels.forEach((label) => {
      issueLabels.push(label.id);
    });

    /*const newLabels = labels.map((label) => {
      if (issueLabels.includes(label.id)) {
        const tmp = label;
        tmp.checked = true;
        return tmp;
      }
      return label;
    });*/
    // setLabel(newLabels);
  }

  useEffect(async () => {
    let labelData = await LabelAPI.getLabels();
    setLabel(labelData);
  }, []);

  let checkedLabelsCnt = 0;
  const checkedLabels = labels.map((label, idx) => {
    if (label.checked) {
      checkedLabelsCnt++;
      return (
        <CheckedLabelsDiv key={`checked-label-${idx}`}>
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

  // label 화면을 닫아줄 때 api 호출을 한다.
  const editIssueLabels = () => {
    setIsOpen(false);
    if (status == 'MakePage') return;

    let labelIdList = [];
    labels.forEach((label) => {
      if (label.checked) {
        labelIdList.push(label.id);
      }
    });
    issueAPI.editIssueLabels(issueId, labelIdList);
  };

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
          <DropDownOverlay onClick={editIssueLabels} />
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
