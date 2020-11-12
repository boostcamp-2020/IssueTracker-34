import React, { useEffect, useState } from 'react';
import Label from '../apis/Labels.api';
import styled from 'styled-components';
import LabelsButton from '../components/LabelsButton';
import MilestonesButton from '../components/MilestonesButton';
import LabelModal from '../components/LabelModal';

import LabelListTemplate from '../components/LabelListTemplate';

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
`;

const NewLabelButton = styled.button`
  height: 100%;
  color: white;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#31c854),
    to(#26973f)
  );
  border: none;
  border-radius: 5px;
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

const LabelHeader = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const LabelListPage = () => {
  const [labels, setLabels] = useState([]);
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const getLabels = async () => {
    const labels1 = await Label.getLabels('');
    const labelCount = labels1.length;
    const parsedLabels = parseLabel(labels1, labelCount);
    setLabels(parsedLabels);
  };

  const changeLabelModalStatus = async () => {
    setModalIsOpened(!modalIsOpened);
  };

  const parseLabel = (labels, labelCount) => {
    const labelCountTemplate = (
      <Header key={`labelCount${labelCount}`}>{labelCount} labels</Header>
    );

    const labelListTemplate = labels.map((label, i) => {
      return (
        <div key={`${label}${i}`}>
          <LabelListTemplate
            changeLabelModalStatus={changeLabelModalStatus}
            getLabels={getLabels}
            label={label}
            i={i}
          />
        </div>
      );
    });
    return [labelCountTemplate, ...labelListTemplate];
  };

  useEffect(() => {
    getLabels();
  }, []);

  return (
    <>
      <LabelHeader>
        <LabelsButton />
        <MilestonesButton />
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          <NewLabelButton
            type="button"
            onClick={() => {
              changeLabelModalStatus();
            }}
          >
            New Label
          </NewLabelButton>
        </div>
      </LabelHeader>
      {modalIsOpened && (
        <LabelModal
          changeLabelModalStatus={changeLabelModalStatus}
          getLabels={getLabels}
        />
      )}
      <div>{labels}</div>
    </>
  );
};

export default LabelListPage;
