import { TitleComplementText } from '../RecentFiles/RecentFilesStyled';
import {
  ContentTitle,
  DivContentSection,
  DivHeaderComplement,
  DivTitleheader,
} from '../RecentUsed/RecentUsedStyled';
import { DivShareComponent } from './ShareComponentStyled';
import { shareElementsArray } from '../../../utils/elements';
import ShareComponentContent from './ShareComponentContent';

const ShareComponent = () => {
  return (
    <>
      <DivShareComponent>
        <DivTitleheader>
          <ContentTitle>Share with me</ContentTitle>
          <DivHeaderComplement>
            <TitleComplementText>View All</TitleComplementText>
          </DivHeaderComplement>
        </DivTitleheader>
        <DivContentSection>
          {shareElementsArray.map((shareElement, key) => {
            return (
              <ShareComponentContent key={key} shareProps={shareElement} />
            );
          })}
        </DivContentSection>
      </DivShareComponent>
    </>
  );
};

export default ShareComponent;
