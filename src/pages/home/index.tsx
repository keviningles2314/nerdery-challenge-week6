import { DivHome, DivSearchBar, InputTextSearchBar } from './homeStyled';

const Home = () => {
  return (
    <>
      <DivHome>
        <DivSearchBar>
          <InputTextSearchBar type='text' placeholder='Search' />
        </DivSearchBar>
      </DivHome>
    </>
  );
};
export default Home;
