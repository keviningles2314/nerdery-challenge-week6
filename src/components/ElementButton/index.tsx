import { ButtonElement, IconLabel } from './ElementButtonStyled';
interface IButtonProps {
  label: string;
  icon: string;
}
const ElementButton = ({ label, icon }: IButtonProps) => {
  return (
    <>
      <ButtonElement>
        <p>{label}</p>
        <IconLabel>{icon}</IconLabel>
      </ButtonElement>
    </>
  );
};
export default ElementButton;
