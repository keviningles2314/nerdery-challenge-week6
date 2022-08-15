import {
  DivCircle,
  DivContentComplement,
  DivContentRecentElements,
  DivContentRecentUsedElement,
  DivtitleRecent,
  DivTitleSection,
  ImageRecent,
  TextDate,
  TitleRecent,
} from './RecentUsedContentStyled';

interface IPropsRecentContent {
  recentContentProps: {
    name: string;
    date: Date;
    numberElements?: number;
  };
}
const RecentUsedContent = ({ recentContentProps }: IPropsRecentContent) => {
  return (
    <>
      <DivContentRecentUsedElement>
        <DivContentRecentElements>
          <ImageRecent src='https://res.cloudinary.com/duqlseyzk/image/upload/v1660484740/wwyaeliodtc0u1fkixeh.png' />
          <DivContentComplement>
            <DivCircle />
            <DivCircle />
          </DivContentComplement>
        </DivContentRecentElements>
        <DivTitleSection>
          <DivtitleRecent>
            <TitleRecent> {recentContentProps.name}</TitleRecent>
          </DivtitleRecent>
          <TextDate>
            Created : {recentContentProps.date.getMonth()}.
            {recentContentProps.date.getDay()}.
            {recentContentProps.date.getFullYear()}
          </TextDate>
        </DivTitleSection>
      </DivContentRecentUsedElement>
    </>
  );
};
export default RecentUsedContent;
