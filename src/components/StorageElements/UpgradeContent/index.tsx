import ElementButton from '../../ElementButton';
import { ButtonElement } from '../../ElementButton/ElementButtonStyled';
import {
  RegularText,
  SmallText,
} from '../StorageInformation/StorageInformationStyled';
import {
  ButtonElementUpgrade,
  DivColorBig,
  DivTextUpgrade,
  DivUpgradeContainer,
  DivUpgradeContent,
  RegularTextUpgrade,
} from './UpgradeContentStyled';

const UpgradeContent = () => {
  return (
    <>
      <DivUpgradeContent>
        <DivUpgradeContainer>
          <DivColorBig />
          <DivTextUpgrade>
            <RegularTextUpgrade>Buy more space now!</RegularTextUpgrade>
            <SmallText>Upgrade to cloud premium</SmallText>
          </DivTextUpgrade>
          <ButtonElementUpgrade>Upgrade Account!</ButtonElementUpgrade>
        </DivUpgradeContainer>
      </DivUpgradeContent>
    </>
  );
};
export default UpgradeContent;
