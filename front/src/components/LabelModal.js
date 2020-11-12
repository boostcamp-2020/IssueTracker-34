import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import RefreshSvg from '../svgs/RefreshSvg';
import LabelAPI from '../apis/Labels.api';
const ModalBox = styled.div`
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  margin-bottom: 1rem;
  padding: 16px;
`;

const Preview = styled.div`
  width: fit-content;
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 5px;
  margin-bottom: 1rem;
  color:  ${(props) => props.color || 'white'};
  background-color:  ${(props) => props.backgroundColor || 'black'};
`;

const Components = styled.form`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  width:  ${(props) => props.width || '15%'};
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #e1e4e8;
  margin-right: 10px;
  padding: 4px;
  width: 100%;
  color:  ${(props) => props.color || 'black'};
  &:focus {
      border: 0.5px solid #0366d6;
      box-shadow: 0px 0px 3px 2px #0366d680;
    }
`;

const ButtonDiv = styled.div`
  display:flex;
  align-self: flex-end;
  & > * {
    padding: 3px 6px;
    margin-left: 2px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;


const Button = styled.button`
  display: flex;
  outline: none;
  padding: 5px 10px;
  background: ${(props) => props.background || '#fafbfc'};
  color: ${(props) => props.color || 'black'};
  border: ${(props) => props.border || '1px solid #d9dadc'};
  &:hover {
    cursor: pointer;
  }
`;



// #798

const LabelModal = ({ changeLabelModalStatus, getLabels }) => {

  const [name, setName] = useState('');
  const [description, setDesription] = useState('');
  const [previewColor, setPreviewColor] = useState('white');
  const [color, setColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('#99aad2');
  const colorRef = useRef('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const descriptionChangeHandler = (e) => {
    setDesription(e.target.value);
  }

  const colorChangeHandler = (e) => {
    if (e.target.value[0] !== '#') {
      e.target.value = '#' + e.target.value.replace(/#/, '');
    }
    if (isColor16Bit(e.target.value)) {
      setColor('black');
      changePreviewLayout(e.target.value);
      return;
    }
    setColor('red');
  }

  const changePreviewTextColor = (bit) => {
    const FirstHexBit = bit[1];
    if (Number(FirstHexBit) >= 8 || isNaN(Number(FirstHexBit))) {
      setPreviewColor('black');
      return;
    }
    setPreviewColor('white');

  }

  const isColor16Bit = (bit) => {
    return /^#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(bit);
  }

  const setRandomBackgroundColor = () => {
    const hexNumber = getRandomHex();
    changePreviewLayout(`#${hexNumber}`);
    colorRef.current.value = `#${hexNumber}`;
  }

  const changePreviewLayout = (hexNumber) => {
    setBackgroundColor(hexNumber);
    changePreviewTextColor(hexNumber);
  }

  const getRandomHex = () => {
    return `${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const addLabel = async(e) => {
    e.preventDefault();
    if (name && backgroundColor) {
      const labelInfo = { 'name': name, 'color': backgroundColor, 'content': description }
      await LabelAPI.createLabel(labelInfo)
      //생성후 다시 다 불러온다.
      await getLabels();
      changeLabelModalStatus();
    }
  }

  useEffect(() => {
    colorRef.current.value = backgroundColor
  }, [])

  return (
    <>
      <ModalBox>
        <Preview color={previewColor} backgroundColor={backgroundColor}>{name || 'Preview Label'}</Preview>
        <Components onSubmit={addLabel}>
          <InputComponent width={'30%'}>
            <label htmlFor="labelName" >Label name</label>
            <StyledInput type='text' id="labelName" name="labelName" placeholder="Label name" onChange={nameChangeHandler} />
          </InputComponent>
          <InputComponent width={'30%'}>
            <label htmlFor="labelDescription" >Description</label>
            <StyledInput type='text' id="labelDescription" name="labelDescription" placeholder="Description (optional)" onChange={descriptionChangeHandler}/>
          </InputComponent>
          <InputComponent width={'15%'}>
            <label htmlFor="labelColor" >Color</label>
            <Inner>
              <div onClick={setRandomBackgroundColor}>
                <RefreshSvg backgroundColor={backgroundColor} />
              </div>
              <StyledInput ref={colorRef} color={color} type='text' id="labelColor" name="labelColor" placeholder="#000" onChange={colorChangeHandler}/>
            </Inner>
          </InputComponent>
          <ButtonDiv>
            <button onClick={changeLabelModalStatus}>Cancel</button>
            {name ? <Button color={'#f3f4f6'} background={'#2db94d'} type="submit" >Create Label</Button> : <Button color={'#fff'} background={'#94d3a2'} type="submit" >Create Label</Button>}
          </ButtonDiv>
        </Components>
      </ModalBox>
    </>
  );
};

export default LabelModal;
