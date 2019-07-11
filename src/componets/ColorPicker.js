import React from 'react';
import styled from 'styled-components';

const ColorPickerWrapper = styled.div`
  display: grid;
  grid-template-columns: 75px 60px;
  grid-column-gap: 6px;
  margin-bottom: 20px;
  position: relative;

  button {
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 2px #fff;
    }
  }
`;

const ColorPicker = ({ onClick, color }) => (
  <ColorPickerWrapper>
    <span>Color</span>
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      }}
    ></button>
  </ColorPickerWrapper>
);

export default ColorPicker;
