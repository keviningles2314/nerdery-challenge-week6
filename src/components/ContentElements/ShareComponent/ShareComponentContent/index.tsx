import moment from 'moment';
import {
  DivContentComplement,
  DivContentRecentElements,
  DivContentRecentUsedElement,
  DivtitleRecent,
  DivTitleSection,
  TextDate,
  TitleRecent,
} from '../../RecentUsed/RecentUsedContent/RecentUsedContentStyled';
import { DivRecentUsed } from '../../RecentUsed/RecentUsedStyled';
import {
  DivCircleShare,
  DivContentShareElement,
  DivContentShareElements,
  DivSquareShare,
  DivTitleSectionShare,
} from './ShareComponentContentStyled';
interface IShareProps {
  shareProps: {
    name: string;
    date: Date;
  };
}

const ShareComponentContent = ({ shareProps }: IShareProps) => {
  return (
    <>
      <DivContentShareElement>
        <DivContentShareElements>
          <DivSquareShare />
          <DivContentComplement>
            <DivCircleShare />
            <DivCircleShare />
          </DivContentComplement>
        </DivContentShareElements>
        <DivTitleSectionShare>
          <DivtitleRecent>
            <TitleRecent>{shareProps.name}</TitleRecent>
          </DivtitleRecent>
          <TextDate>
            Created: {moment(shareProps.date).format('D')}.
            {moment(shareProps.date).format('M')}.
            {moment(shareProps.date).format('Y')}
          </TextDate>
        </DivTitleSectionShare>
      </DivContentShareElement>
    </>
  );
};
export default ShareComponentContent;
