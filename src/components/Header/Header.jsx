import { HOME_ROUTE, TEACHERS_ROUTE } from "../../constants/routes";
import {
  AuthContainer,
  HeaderLink,
  HederLinkContainer,
  LoginLink,
  LogoText,
  RegisterButton,
  StyledHeader,
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
        <LoginLink>
          <img src={loginIcon} alt="Log in" />
          <LogoText>Log in</LogoText>
        </LoginLink>
        <RegisterButton>Registration</RegisterButton>
      </AuthContainer>
    </StyledHeader>
  );
};
export default Header;
