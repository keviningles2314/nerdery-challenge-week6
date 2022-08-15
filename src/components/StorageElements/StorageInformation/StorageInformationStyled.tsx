import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const DivStorageInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1% 8% 1% 11%;
  box-sizing: border-box;
`;

export const TitleTextStorage = styled.p`
  color: ${theme.mainTextColor};
  font-size: 1.3rem;
`;

export const DivPercent = styled.div`
  background-color: ${theme.white};
  padding: 10%;
  border-radius: 180px;
  width: 60%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -75%;
  margin-left: 20%;
  box-sizing: border-box;
`;
export const TextNumberPerc = styled.p`
  color: ${theme.mainTextColor};
  font-size: 1.5rem;
  margin: 0;
`;

export const RegularText = styled.p`
  color: ${theme.pageInactive};
  font-size: 0.9rem;
  margin: 0;
`;

export const SmallText = styled.p`
  color: ${theme.gray};
  font-size: 0.5rem;
  text-align: center;
  margin: 0;
`;
