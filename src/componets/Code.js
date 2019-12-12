import React from 'react';
import styled from 'styled-components';

const CodeWrapper = styled.div`
  height: 100px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  padding: 0 15px;
  border-radius: 4px;
`;

const Code = ({ inset, x, y, b, s, c }) => (
  <CodeWrapper>
    <code>
      box-shadow: {inset ? 'inset ' : ''}
      {x}px {y}px {b}px {s}px rgba({c.r}, {c.g}, {c.b}, {c.a});
    </code>
  </CodeWrapper>
);

export default Code;
