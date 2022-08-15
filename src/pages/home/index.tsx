import { DivHome, DivSearchBar, InputTextSearchBar } from './homeStyled';
import { IoIosSquareOutline } from 'react-icons/io';
import RecentUsed from '../../components/ContentElements/RecentUsed';
import RecentFiles from '../../components/ContentElements/RecentFiles';
const Home = () => {
  return (
    <>
      <DivHome>
        <DivSearchBar>
          <IoIosSquareOutline
            style={{
              marginTop: '0.1em',
              marginLeft: '0.5em',
              position: 'absolute',
            }}
            color='#BCBECA'
            size='1.5em'
          />
          <InputTextSearchBar type='text' placeholder='Search' />
        </DivSearchBar>
        <RecentUsed />
        <RecentFiles />
      </DivHome>
    </>
  );
};
export default Home;
