import {
  ContentTitle,
  DivHeaderComplement,
  DivTitleheader,
} from '../RecentUsed/RecentUsedStyled';
import RecentFilesElements from './RecentFilesElements';
import {
  DivContentSectionRecentFiles,
  DivRecentFiles,
  DivRecentFilesContent,
  DivRecentFilesContentHeader,
  TitleComplementText,
  TitleContentHeader,
} from './RecentFilesStyled';
import { fileElementsArray } from '../../../utils/elements';
const RecentFiles = () => {
  return (
    <>
      <DivRecentFiles>
        <DivTitleheader>
          <ContentTitle>Recent Files</ContentTitle>
          <DivHeaderComplement>
            <TitleComplementText>View All</TitleComplementText>
          </DivHeaderComplement>
        </DivTitleheader>
        <DivRecentFilesContent>
          <DivRecentFilesContentHeader>
            <TitleContentHeader>Name</TitleContentHeader>
            <TitleContentHeader>Members</TitleContentHeader>
            <TitleContentHeader>Last Modified</TitleContentHeader>
          </DivRecentFilesContentHeader>
          <DivContentSectionRecentFiles>
            {fileElementsArray.map((fileElement, key) => {
              return <RecentFilesElements filesElementsProps={fileElement} />;
            })}
          </DivContentSectionRecentFiles>
        </DivRecentFilesContent>
      </DivRecentFiles>
    </>
  );
};

export default RecentFiles;
