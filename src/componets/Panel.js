import React from 'react';
import styled from 'styled-components';

const SidePanel = styled.div`
  border-radius: 4px;
  background-color: #e5e5e5;
  padding: 40px 20px;
`;

const Panel = ({ children }) => <SidePanel>{children}</SidePanel>;

export default Panel;
