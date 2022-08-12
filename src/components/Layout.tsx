import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import UserStorageInformation from '../pages/userStorageInformation';
import { LayoutDiv } from './LayoutStyled';
import Sidebar from './Sidebar';
import { theme } from '../style/theme';
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutDiv>
          <Sidebar />
          {children}
          <UserStorageInformation />
        </LayoutDiv>
      </ThemeProvider>
    </>
  );
};
export default Layout;
