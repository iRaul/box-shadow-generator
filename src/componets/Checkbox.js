import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-column-gap: 6px;
  margin-bottom: 20px;
`;

const InsetCheckbox = ({ onChange }) => (
  <Checkbox>
    <span>Inset</span>
    <input type="checkbox" onChange={onChange} />
  </Checkbox>
);

export default InsetCheckbox;
