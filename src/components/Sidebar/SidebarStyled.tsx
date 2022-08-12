import styled from 'styled-components';
import { theme } from '../../style/theme';
export const DivSidebar = styled.div`
  background: ${theme.sidebarBackground};
  padding: 3% 0% 2.5% 0%;
  gap: 40px;
  display: flex;
  flex-direction: column;
  color: ${theme.sidebarTextColor};
  width: 17%;
`;

export const DivSidebarHeader = styled.div`
  padding: 0% 14%;
`;

export const DivSidebarHeaderElement = styled.div`
  width: 74px;
  height: 21px;
  background: linear-gradient(270deg, #689ef8 0%, #ff6860 56.25%, #ff9f00 100%);
  border-radius: 5px;
`;

export const DivSidebarLinks = styled.div`
  font-size: 0.6em;
  padding: 14%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #464c61;
  gap: 16px;
`;

export const DivSidebarSmallMenu = styled.div`
  padding: 3% 0% 3% 12%;
  height: 34%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 9px;
  background-color: ${theme.sidebarSmallBackground};
  font-size: 0.6em;
  gap: 4px;
  z-index: 1;
`;

export const DivTail = styled.div`
  width: 8%;
  height: 6%;
  transform: rotate(45deg);
  background-color: #464c61;
  border-radius: 1px;
  margin-top: -26%;
  margin-left: 15%;
`;

export const DivBottomItems = styled.div`
  display: flex;
  padding: 0% 14%;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  gap: 20px;
`;
