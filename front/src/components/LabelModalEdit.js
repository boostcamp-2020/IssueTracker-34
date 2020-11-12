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

const LabelModalEdit = ({ changeLabelModalStatus, getLabels, inputInitialValue = '', descriptionInitialValue = '', colorInitialValue = 'black', labelId }) => {

  const [name, setName] = useState(inputInitialValue);
  const [description, setDesription] = useState(descriptionInitialValue);
  const [previewColor, setPreviewColor] = useState('white');
  const [color, setColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('#99aad2');
  const colorRef = useRef('');
  const inputRef = useRef('');
  const desRef = useRef('');


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

  const hexToRgb = (hex) => {
    return hex ? {
      r: parseInt(hex[1], 16),
      g: parseInt(hex[2], 16),
      b: parseInt(hex[3], 16),
    } : null;
  }

  const changePreviewTextColor = (hex) => {
    const color = ContrastColor(hexToRgb(hex));
    if (color == 0) {
      setPreviewColor('black');
      return;
    }
    setPreviewColor('white');

  }

  const ContrastColor = (color) => {
    let luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;
    if (luminance > 0.05) {
      return 0;
    } else {
      return 255;
    }
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

  const editLabel = async(e) => {
    e.preventDefault();
    const labelInfo = { 'labelId': labelId, 'name': name, 'color': backgroundColor, 'content': description }
    await LabelAPI.updateLabel(labelInfo);
    await getLabels();
    changeLabelModalStatus();
  }

  useEffect(() => {
    colorRef.current.value = colorInitialValue || backgroundColor;
    inputRef.current.value = inputInitialValue || '';
    desRef.current.value = descriptionInitialValue || '';
    if (colorInitialValue) {
      changePreviewLayout(colorInitialValue)
    }
  }, [])

  return (
    <>
      <ModalBox>
        <Preview color={previewColor} backgroundColor={backgroundColor}>{name || 'Preview Label'}</Preview>
        <Components onSubmit={editLabel}>
          <InputComponent width={'30%'}>
            <label htmlFor="labelName" >Label name</label>
            <StyledInput ref={inputRef} type='text' id="labelName" name="labelName" placeholder="Label name" onChange={nameChangeHandler} />
          </InputComponent>
          <InputComponent width={'30%'}>
            <label htmlFor="labelDescription" >Description</label>
            <StyledInput ref={desRef} type='text' id="labelDescription" name="labelDescription" placeholder="Description (optional)" onChange={descriptionChangeHandler}/>
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
            {name ? <Button color={'#f3f4f6'} background={'#2db94d'} type="submit" >Save Changes</Button> : <Button color={'#fff'} background={'#94d3a2'} type="submit">Save Changes</Button>}
          </ButtonDiv>
        </Components>
      </ModalBox>
    </>
  );
};

export default LabelModalEdit;
