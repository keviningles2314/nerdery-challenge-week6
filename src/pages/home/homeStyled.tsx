import styled from 'styled-components';
import { theme } from '../../style/theme';

export const DivHome = styled.div`
  width: 55%;
  height: 100%;
  background-color: ${theme.background};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  gap: 13px;
`;

export const InputTextSearchBar = styled.input`
  font-size: 0.7em;
  box-sizing: border-box;
  background-color: ${theme.white};
  width: 100%;
  height: 100%;
  color: ${theme.gray};
  border: none;
  border-radius: 5px;
  padding-top: 2%;
  padding-left: 7%;
  padding-bottom: 2%;
  ::placeholder {
    color: #bcbeca;
  }
`;

export const DivSearchBar = styled.div`
  box-sizing: border-box;
  height: 3.5%;
`;
