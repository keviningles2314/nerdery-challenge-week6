import {
  DivColorSquare,
  DivFileName,
  DivRecentFilesElements,
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
        <TextRecentFilesSection>
          {filesElementsProps.members}
        </TextRecentFilesSection>
        <TextRecentFilesSection>
          {filesElementsProps.lastModified.getDate()}
        </TextRecentFilesSection>
      </DivRecentFilesElements>
    </>
  );
};
export default RecentFilesElements;
