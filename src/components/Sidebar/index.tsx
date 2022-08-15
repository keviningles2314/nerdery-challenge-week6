import { sideBarElements } from '../../utils/elements';
import { sidebarSmallElements } from '../../utils/elements';
import ElementButton from '../ElementButton';
import SidebarLinkElement from './SidebarLinkElement';
import {
  DivBottomItems,
  DivSidebar,
  DivSidebarHeader,
  DivSidebarHeaderElement,
  DivSidebarLinks,
  DivSidebarSmallMenu,
  DivTail,
} from './SidebarStyled';
const Sidebar = () => {
  return (
    <DivSidebar>
      <DivSidebarHeader>
        <DivSidebarHeaderElement />
      </DivSidebarHeader>
      <DivSidebarLinks>
        {sideBarElements.map((sidebarElement, key) => {
          return key == 0 ? (
            <SidebarLinkElement
              key={key}
              active={true}
              linkElement={sidebarElement}
            />
          ) : (
            <SidebarLinkElement
              key={key}
              active={false}
              linkElement={sidebarElement}
            />
          );
        })}
      </DivSidebarLinks>
      <DivBottomItems>
        <DivSidebarSmallMenu>
          {sidebarSmallElements.map((sidebarElement, key) => {
            return (
              <SidebarLinkElement
                key={key}
                active={true}
                linkElement={sidebarElement}
              />
            );
          })}
        </DivSidebarSmallMenu>
        <DivTail />
        <ElementButton label={'Create New'} icon={'+'} />
      </DivBottomItems>
    </DivSidebar>
  );
};

export default Sidebar;
