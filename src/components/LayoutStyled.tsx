import styled from 'styled-components';

import { theme } from '../style/theme';
export const LayoutDiv = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  background-color: ${theme.background};
  color: ${theme.mainTextColor};
  font-family: 'Roboto', sans-serif;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
