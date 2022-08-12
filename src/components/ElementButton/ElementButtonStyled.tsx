import styled from 'styled-components';
import { theme } from '../../style/theme';

export const ButtonElement = styled.button`
  background-color: ${theme.buttonCreateBackground};
  border-style: none;
  color: ${theme.sidebarTextColor};
  border-radius: 7px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  font-size: 0.6em;
  cursor: pointer;
`;

export const IconLabel = styled.p`
  background-color: ${theme.yellowActive};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 20%;
  height: 80%;
`;
