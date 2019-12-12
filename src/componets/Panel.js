import React from 'react';
import styled from 'styled-components';

const SidePanel = styled.div`
  border-radius: 4px;
  background-color: #ededed;
  padding: 40px 20px;
`;

const Panel = ({ children }) => <SidePanel>{children}</SidePanel>;

export default Panel;
