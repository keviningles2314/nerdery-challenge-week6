import styled from 'styled-components';
import { theme } from '../../../../style/theme';
import { DivColorSquare } from '../../../ContentElements/RecentFiles/RecentFilesElements/RecentFilesElementsStyled';

export const DivContentStorageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-bottom: 1px solid #e0e7f1;
`;

export const TextName = styled.p`
  color: ${theme.mainTextColor};
  font-size: 0.7rem;
  margin: 0;
`;

export const DivTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const DivSquareStorage = styled(DivColorSquare)`
  width: 28px;
  height: 28px;
`;

export const DivSpace = styled.div`
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 3% 8%;
`;

export const TextSpace = styled(TextName)`
  font-size: 0.5rem;
  font-weight: bold;
  margin: 0;
`;

export const DivNameElement = styled.div`
  display: flex;
  gap: 6px;
`;
