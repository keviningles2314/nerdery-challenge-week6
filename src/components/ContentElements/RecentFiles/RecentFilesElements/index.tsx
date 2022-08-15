import moment from 'moment';
import {
  DivColorSquare,
  DivFileName,
  DivRecentFilesElements,
  DivTextRecent,
  TextNameFile,
  TextRecentFilesSection,
} from './RecentFilesElementsStyled';

interface IFilesElements {
  filesElementsProps: {
    name: string;
    members: number;
    lastModified: Date;
  };
}
const RecentFilesElements = ({ filesElementsProps }: IFilesElements) => {
  return (
    <>
      <DivRecentFilesElements>
        <DivFileName>
          <DivColorSquare />
          <TextNameFile>{filesElementsProps.name}</TextNameFile>
        </DivFileName>
        <DivTextRecent>
          <TextRecentFilesSection>
            {filesElementsProps.members} members
          </TextRecentFilesSection>
          <TextRecentFilesSection>
            {moment(filesElementsProps.lastModified).format('ll')}
          </TextRecentFilesSection>
        </DivTextRecent>
      </DivRecentFilesElements>
    </>
  );
};
export default RecentFilesElements;
