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
          <RecentUsedContent recentContentProps={recentUsedElements[0]} />
          <RecentUsedContent recentContentProps={recentUsedElements[1]} />
          <RecentUsedContent recentContentProps={recentUsedElements[2]} />
        </DivContentSection>
      </DivRecentUsed>
    </>
  );
};
export default RecentUsed;
