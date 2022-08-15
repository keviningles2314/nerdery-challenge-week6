import {
  DivCircle,
  DivContentRecentElements,
  DivContentRecentUsedElement,
  ImageRecent,
  TextDate,
  TitleRecent,
} from './RecentUsedContentStyled';

interface IPropsRecentContent {
  recentContentProps: {
    name: string;
    date: Date;
    numberElements: number;
  };
}
const RecentUsedContent = ({ recentContentProps }: IPropsRecentContent) => {
  return (
    <>
      <DivContentRecentUsedElement>
        <DivContentRecentElements>
          <ImageRecent src='https://res.cloudinary.com/duqlseyzk/image/upload/v1660484740/wwyaeliodtc0u1fkixeh.png' />
          <DivCircle />
          <DivCircle />
        </DivContentRecentElements>
        <TitleRecent> {recentContentProps.name}</TitleRecent>
        <TextDate>
          Created : {recentContentProps.date.getMonth()}.
          {recentContentProps.date.getDay()}.
          {recentContentProps.date.getFullYear()}
        </TextDate>
      </DivContentRecentUsedElement>
    </>
  );
};
export default RecentUsedContent;
