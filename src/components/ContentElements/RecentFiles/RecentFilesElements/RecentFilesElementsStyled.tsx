import styled from 'styled-components';
import { theme } from '../../../../style/theme';

export const DivRecentFilesElements = styled.div`
  display: flex;
  background-color: ${theme.white};
  border-radius: 10px;
  padding: 0% 2.4%;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const DivFileName = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 1;
`;

export const DivColorSquare = styled.div`
  background-color: ${theme.orange};
  width: 21px;
  height: 21px;
  border-radius: 5px;
`;
export const DivTextRecent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const TextNameFile = styled.p`
  color: ${theme.mainTextColor};
  font-size: 0.8rem;
`;

export const TextRecentFilesSection = styled.p`
  color: ${theme.pageInactive};
  font-size: 0.8rem;
`;
