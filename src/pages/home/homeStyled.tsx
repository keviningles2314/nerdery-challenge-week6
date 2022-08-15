import styled from 'styled-components';
import { theme } from '../../style/theme';

export const DivHome = styled.div`
  width: 55%;
  height: 100%;
  background-color: #f5f6fc;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  gap: 20px;
`;

export const InputTextSearchBar = styled.input`
  font-size: 0.6em;
  box-sizing: border-box;
  background-color: ${theme.white};
  width: 100%;
  height: 100%;
  color: ${theme.gray};
  border: none;
  border-radius: 5px;
  padding-left: 6%;
  ::placeholder {
    color: #bcbeca;
  }
`;

export const DivSearchBar = styled.div`
  box-sizing: border-box;
  height: 3.5%;
`;
