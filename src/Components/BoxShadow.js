import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 250px;
  width: 400px;
  border: 1px solid #333;
  margin: 100px 0;
  box-shadow: ${props =>
    `${props.x}px ${props.y}px ${props.b}px ${props.s}px #333`};
`;

const BoxShadow = props => <Box {...props} />;

export default BoxShadow;
