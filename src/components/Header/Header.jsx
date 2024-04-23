import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  TEACHERS_ROUTE,
} from "../../constants/routes";

import {
  AuthContainer,
  HeaderLink,
  HederLinkContainer,
  LoginLink,
  LoginText,
  RegisterButton,
  StyledHeader,
} from "./Header.styled";
import Logo from "./Logo/Logo";
import loginIcon from "../../assets/images/Icons/log-in.svg";
import SignInForm from "components/Auth/SignIn/SignIn";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import SignUpForm from "components/Auth/SignUp/SignUp";

const Header = () => {
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

  const openModalLogin = () => {
    setIsModalOpenLogin(true);
  };

  const closeModalLogin = () => {
    setIsModalOpenLogin(false);
  };

  const openModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const closeModalRegister = () => {
    setIsModalOpenRegister(false);
  };

  return (
    <StyledHeader>
      <Logo />
      <HederLinkContainer>
        <HeaderLink to={HOME_ROUTE}>Home</HeaderLink>
        <HeaderLink to={TEACHERS_ROUTE}>Teachers</HeaderLink>
        <HeaderLink to={FAVORITES_ROUTE}>Favorites</HeaderLink>
      </HederLinkContainer>
      <AuthContainer>
        <LoginLink onClick={openModalLogin}>
          <img src={loginIcon} alt="Log in" />
          <LoginText>Log in</LoginText>
        </LoginLink>
        <RegisterButton onClick={openModalRegister}>
          Registration
        </RegisterButton>
      </AuthContainer>
      <Modal isOpen={isModalOpenLogin} onClose={closeModalLogin}>
        <SignInForm onClose={closeModalLogin} />
      </Modal>
      <Modal isOpen={isModalOpenRegister} onClose={closeModalRegister}>
        <SignUpForm onClose={closeModalRegister} />
      </Modal>
    </StyledHeader>
  );
};

export default Header;
