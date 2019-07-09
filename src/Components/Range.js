import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 40px;
  grid-column-gap: 6px;
  margin-bottom: 20px;

  span:nth-child(3) {
    text-align: right;
  }
`;

const RangeInput = ({ name, value, min, max, onInput }) => (
  <InputWrapper>
    <span>{name}</span>
    <input
      type="range"
      min={min}
      max={max}
      defaultValue={value}
      onInput={onInput}
    />
    <span>{value}</span>
  </InputWrapper>
);

export default RangeInput;
