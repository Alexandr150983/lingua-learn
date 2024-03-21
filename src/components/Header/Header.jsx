import { HOME_ROUTE, TEACHERS_ROUTE } from "../../constants/routes";
import { HeaderLink, StyledHeader } from "./Header.styled";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderLink to={HOME_ROUTE}>Home</HeaderLink>
      <HeaderLink to={TEACHERS_ROUTE}>Teachers</HeaderLink>
    </StyledHeader>
  );
};
export default Header;
