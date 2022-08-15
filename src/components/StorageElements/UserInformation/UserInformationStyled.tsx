import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const DivUserInformation = styled.div`
  display: flex;
  align-items: center;
  padding: 0% 15%;
  justify-content: space-between;
  border-bottom: #e0e7f1 1px solid;
  height: 10%;
  width: 100%;
  box-sizing: border-box;
`;

export const DivSquaresInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const DivSquareInfo = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${theme.gray};
`;

export const DivUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TextUserName = styled.p`
  color: ${theme.mainTextColor};
  font-size: 0.8rem;
`;

export const ImageUser = styled.img`
  width: 31px;
  height: 31px;
  border-radius: 180px;
`;
