import StorageInformation from '../../components/StorageElements/StorageInformation';
import UpgradeContent from '../../components/StorageElements/UpgradeContent';
import UserInformation from '../../components/StorageElements/UserInformation';
import { DivUserStorage } from './userStorageStyled';

const UserStorageInformation = () => {
  return (
    <>
      <DivUserStorage>
        <UserInformation />
        <StorageInformation />
        <UpgradeContent />
      </DivUserStorage>
    </>
  );
};

export default UserStorageInformation;
