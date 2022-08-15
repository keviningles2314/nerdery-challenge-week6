import {
  DivSquareInfo,
  DivSquaresInfo,
  DivUserInfo,
  DivUserInformation,
  ImageUser,
  TextUserName,
} from './UserInformationStyled';

const UserInformation = () => {
  return (
    <>
      <DivUserInformation>
        <DivSquaresInfo>
          <DivSquareInfo />
          <DivSquareInfo />
        </DivSquaresInfo>
        <DivUserInfo>
          <TextUserName>Name</TextUserName>
          <ImageUser src='https://res.cloudinary.com/duqlseyzk/image/upload/v1650354842/g3mngv15ovadxgoufwvw.jpg' />
        </DivUserInfo>
      </DivUserInformation>
    </>
  );
};
export default UserInformation;
