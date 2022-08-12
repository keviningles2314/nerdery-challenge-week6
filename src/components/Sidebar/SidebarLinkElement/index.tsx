import { DivLink, DivSquare } from './SidebarLinkElementStyled';

interface ILinkProps {
  active?: boolean;
  linkElement: string;
}

const SidebarLinkElement = ({ linkElement, active }: ILinkProps) => {
  return (
    <>
      <DivLink active={active}>
        <DivSquare />
        <p>{linkElement}</p>
      </DivLink>
    </>
  );
};
export default SidebarLinkElement;
