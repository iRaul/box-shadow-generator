import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 250px;
  width: 400px;
  background-color: #fff;
  border-radius: 4px;
  margin: 100px 0;
`;

const BoxShadow = ({ inset, x, y, b, s, c }) => (
  <Box
    style={{
      boxShadow: `
        ${inset ? 'inset' : ''}
        ${x}px ${y}px ${b}px ${s}px
        rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})
      `,
    }}
  />
);

export default BoxShadow;
