import styled from 'styled-components';
import { theme } from '../../../../style/theme';

export const DivContentRecentUsedElement = styled.div`
  background-color: ${theme.white};
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  border-radius: 12px;
  padding: 4% 3% 0% 2%;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
`;

export const DivContentRecentElements = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-end;
`;
export const DivContentComplement = styled.div`
  display: flex;
`;

export const DivContentRecentTitle = styled.div`
  display: flex;
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

export const DivtitleRecent = styled.div`
  height: 40%;
`;

export const TitleRecent = styled.p`
  font-size: 0.8rem;
`;

export const TextDate = styled.p`
  color: ${theme.gray};
  font-size: 0.55rem;
`;

export const DivTitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;
