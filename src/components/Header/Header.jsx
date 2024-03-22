import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  TEACHERS_ROUTE,
} from "../../constants/routes";
import {
  AuthContainer,
  HeaderLink,
  HederLinkContainer,
  LogoText,
  RegisterButton,
  StyledHeader,
  StyledLink,
} from "./Header.styled";
import Logo from "./Logo/Logo";
import loginIcon from "../../assets/images/Icons/log-in.svg";
const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HederLinkContainer>
        <HeaderLink to={HOME_ROUTE}>Home</HeaderLink>
        <HeaderLink to={TEACHERS_ROUTE}>Teachers</HeaderLink>
      </HederLinkContainer>
      <AuthContainer>
        <StyledLink to={LOGIN_ROUTE}>
          <img src={loginIcon} alt="Log in" />
          <LogoText>Log in</LogoText>
        </StyledLink>
        <RegisterButton to={REGISTER_ROUTE}>Registration</RegisterButton>
      </AuthContainer>
    </StyledHeader>
  );
};
export default Header;
