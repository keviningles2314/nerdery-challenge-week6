import styled from 'styled-components';
import { theme } from '../../../style/theme';
interface IActiveProps {
  active?: boolean;
}

export const DivLink = styled.div`
  cursor: pointer;
  height: 17%;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(p: IActiveProps) =>
    p.active ? theme.sidebarTextColor : theme.sidebarInactiveTextColor};
`;

export const DivSquare = styled.div`
  width: 14px;
  height: 14px;
  border: ${(p: IActiveProps) =>
      p.active ? theme.sidebarTextColor : theme.sidebarInactiveTextColor}
    solid 1px;
`;
