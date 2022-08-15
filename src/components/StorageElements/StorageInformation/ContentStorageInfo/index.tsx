import { SmallText } from '../StorageInformationStyled';
import {
  DivContentStorageInfo,
  DivNameElement,
  DivSpace,
  DivSquareStorage,
  DivTextSection,
  TextName,
  TextSpace,
} from './ContentStorageInfoStyled';

interface IStorageInfo {
  storageInfoProps: {
    name: string;
    files: number;
    space: number;
  };
}
const ContentStorageInfo = ({ storageInfoProps }: IStorageInfo) => {
  return (
    <>
      <DivContentStorageInfo>
        <DivNameElement>
          <DivSquareStorage />
          <DivTextSection>
            <TextName>{storageInfoProps.name}</TextName>
            <SmallText>{storageInfoProps.files} files</SmallText>
          </DivTextSection>
        </DivNameElement>
        <DivSpace>
          <TextSpace>{storageInfoProps.space} GB</TextSpace>
        </DivSpace>
      </DivContentStorageInfo>
    </>
  );
};
export default ContentStorageInfo;
