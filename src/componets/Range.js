import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 40px;
  grid-column-gap: 6px;
  margin-bottom: 20px;
`;

const Text = styled.span``;

const Value = styled.span`
  text-align: right;
`;

const RangeInput = ({ name, value, min, max, onInput }) => (
  <InputWrapper>
    <Text>{name}</Text>
    <input
      type="range"
      min={min}
      max={max}
      defaultValue={value}
      onInput={onInput}
    />
    <Value>{value}</Value>
  </InputWrapper>
);

export default RangeInput;
