import React from 'react';
import styled from 'styled-components';

const CodeWrapper = styled.div`
  height: 100px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
`;

const Code = ({ x, y, b, s }) => (
  <CodeWrapper>
    <code>
      box-shadow: {x}px {y}px {b}px {s}px #333;
    </code>
  </CodeWrapper>
);

export default Code;
