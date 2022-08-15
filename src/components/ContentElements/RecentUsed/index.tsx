import { DivSquare } from '../../Sidebar/SidebarLinkElement/SidebarLinkElementStyled';
import RecentUsedContent from './RecentUsedContent';
import {
  ContentTitle,
  DivContentSection,
  DivHeaderComplement,
  DivRecentUsed,
  DivTitleheader,
} from './RecentUsedStyled';
import { recentUsedElements } from '../../../utils/elements';
const RecentUsed = () => {
  return (
    <>
      <DivRecentUsed>
        <DivTitleheader>
          <ContentTitle>Recently Used</ContentTitle>
          <DivHeaderComplement>
            <DivSquare />
            <DivSquare />
          </DivHeaderComplement>
        </DivTitleheader>
        <DivContentSection>
          {recentUsedElements.map((recentElement, key) => {
            return (
              <RecentUsedContent key={key} recentContentProps={recentElement} />
            );
          })}
        </DivContentSection>
      </DivRecentUsed>
    </>
  );
};
export default RecentUsed;
