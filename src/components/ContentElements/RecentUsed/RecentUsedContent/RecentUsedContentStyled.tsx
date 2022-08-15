import styled from 'styled-components';
import { theme } from '../../../../style/theme';

export const DivContentRecentUsedElement = styled.div`
  background-color: ${theme.white};
  display: flex;
  flex-direction: column;
  width: 25%;
  border-radius: 12px;
  padding: 2%;
`;

export const DivContentRecentElements = styled.div`
  display: flex;
`;

export const DivContentRecentTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageRecent = styled.img``;

export const DivCircle = styled.div`
  border: ${theme.gray} 1px solid;
  width: 18px;
  height: 18px;
  border-radius: 180px;
  margin-left: -5px;
  background-color: ${theme.white};
`;
export const TitleRecent = styled.p`
  font-size: 0.8rem;
`;

export const TextDate = styled.p`
  color: ${theme.gray};
  font-size: 0.55rem;
`;
