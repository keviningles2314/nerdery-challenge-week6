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
import { DivTextRecent } from './RecentFilesElements/RecentFilesElementsStyled';
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
            <DivTextRecent>
              <TitleContentHeader>Name</TitleContentHeader>
            </DivTextRecent>
            <DivTextRecent>
              <TitleContentHeader>Members</TitleContentHeader>
              <TitleContentHeader>Last Modified</TitleContentHeader>
            </DivTextRecent>
          </DivRecentFilesContentHeader>
          <DivContentSectionRecentFiles>
            {fileElementsArray.map((fileElement, key) => {
              return (
                <RecentFilesElements
                  key={key}
                  filesElementsProps={fileElement}
                />
              );
            })}
          </DivContentSectionRecentFiles>
        </DivRecentFilesContent>
      </DivRecentFiles>
    </>
  );
};

export default RecentFiles;
