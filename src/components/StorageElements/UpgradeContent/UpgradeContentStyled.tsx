import styled from 'styled-components';
import { theme } from '../../../style/theme';
import { ButtonElement } from '../../ElementButton/ElementButtonStyled';
import { DivSidebarHeaderElement } from '../../Sidebar/SidebarStyled';
import { RegularText } from '../StorageInformation/StorageInformationStyled';

export const DivUpgradeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9%;
`;

export const DivUpgradeContainer = styled.div`
  background-color: ${theme.white};
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10% 0%;
  width: 100%;
  border-radius: 18px;
`;

export const DivColorBig = styled(DivSidebarHeaderElement)`
  width: 119px;
  height: 73px;
`;

export const RegularTextUpgrade = styled(RegularText)`
  font-size: 0.8rem;
  margin: 0;
  font-weight: bold;
`;

export const DivTextUpgrade = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ButtonElementUpgrade = styled(ButtonElement)`
  padding: 6%;
  font-size: 0.65rem;
`;
