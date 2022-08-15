import styled from 'styled-components';
import { theme } from '../../../../style/theme';
import {
  DivContentRecentElements,
  DivContentRecentUsedElement,
} from '../../RecentUsed/RecentUsedContent/RecentUsedContentStyled';

export const DivSquareShare = styled.div`
  width: 30px;
  height: 26px;
  background-color: ${theme.orange};
`;

export const DivCircleShare = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${theme.white};
  border: red 1px solid;
  border-radius: 180px;
  margin-left: -7px;
  box-sizing: border-box;
`;

export const DivTitleSectionShare = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  box-sizing: border-box;
`;

export const DivContentShareElement = styled(DivContentRecentUsedElement)`
  gap: 0px;
  padding: 2.5% 1% 1% 2%;
  height: 60%;
  width: 33%;
`;

export const DivContentShareElements = styled(DivContentRecentElements)`
  gap: 65px;
`;
