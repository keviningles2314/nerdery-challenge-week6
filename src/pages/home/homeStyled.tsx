import styled from 'styled-components';
import { theme } from '../../style/theme';

export const DivHome = styled.div`
  width: 55%;
  height: 100%;
  background-color: #f5f6fc;
  display: flex;
  flex-direction: column;
  padding: 2% 3% 2% 2%;
`;

export const InputTextSearchBar = styled.input`
  font-size: 0.7em;
  background-color: ${theme.white};
  width: 100%;
  color: ${theme.gray};
  border: none;
  padding: 1%;
  border-radius: 5px;
`;

export const DivSearchBar = styled.div``;

export const DivRecentUsed = styled.div``;

export const DivRecentFiles = styled.div``;

export const DivShare = styled.div``;
