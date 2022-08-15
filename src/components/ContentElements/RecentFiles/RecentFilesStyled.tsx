import styled from 'styled-components';
import { theme } from '../../../style/theme';
export const DivRecentFiles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleComplementText = styled.p`
  color: ${theme.mainTextColor};
  font-size: 0.9rem;
`;

export const DivRecentFilesContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivRecentFilesContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleContentHeader = styled.p`
  color: ${theme.sidebarInactiveTextColor};
  font-size: 0.8rem;
`;

export const DivContentSectionRecentFiles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
