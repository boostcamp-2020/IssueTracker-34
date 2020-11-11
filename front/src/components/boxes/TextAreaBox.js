import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/use.debounce';

const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-color: #e1e4e8;
  background-color: #fafbfc;
  min-width: 20rem;
  min-height: 12rem;
  border-radius: 4px;
  margin-bottom: 8px;
  resize: vertical;
  &:focus {
    border: 0.5px solid #0366d6;
    box-shadow: 0px 0px 3px 2px #0366d680;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  bottom: 54px;
  right: 25px;
  font-size: 12px;
`;

const CountText = ({ count }) => {
  return <StyledSpan>{count} characters</StyledSpan>;
};

const TextAreaBox = ({ inputContentRef }) => {
  const [textCount, setTextCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textAreaCountHandle = (event) => {
    setTextCount(event.target.value.length);
  };
  const debouncedCountTerm = useDebounce(textCount, 2000);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, [debouncedCountTerm]);

  return (
    <div>
      <TextArea
        type="text"
        ref={inputContentRef}
        placeholder="Leave a comment"
        onChange={textAreaCountHandle}
      />
      {isVisible ? <CountText count={textCount} /> : ''}
    </div>
  );
};

export default TextAreaBox;
