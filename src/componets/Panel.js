import React from 'react';
import styled from 'styled-components';

const SidePanel = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 300px;
  background-color: #ededed;
  padding: 40px 20px;
`;

const Panel = ({ children }) => <SidePanel>{children}</SidePanel>;

export default Panel;
