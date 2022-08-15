import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const DivRecentUsed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DivTitleheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTitle = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
  color: ${theme.mainTextColor};
`;

export const DivHeaderComplement = styled.div`
  display: flex;
  gap: 10px;
`;

export const DivContentSection = styled.div`
  display: flex;
  gap: 20px;
`;
