import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import loginIcon from "assets/images/Icons/log-in.svg";

import { Logo, SignInForm, SignUpForm, Modal } from "components";

import {
  AuthContainer,
  HeaderLink,
  HederLinkContainer,
  LoginLink,
  LoginSvg,
  LoginText,
  RegisterButton,
  StyledHeader,
} from "./Header.styled";
import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from "constants/routes";
import { removeUser } from "../../redux/Auth/authSlice";
import { selectIsAuth } from "../../redux/Auth/authSelector";
import { clearFavorite } from "../../redux/Favorites/favoritesSlice";

const Header = () => {
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

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
        {isAuth ? (
          <>
            <HeaderLink to={HOME_ROUTE}>Home</HeaderLink>
            <HeaderLink to={TEACHERS_ROUTE}>Teachers</HeaderLink>
            <HeaderLink to={FAVORITES_ROUTE}>Favorites</HeaderLink>
          </>
        ) : (
          <>
            <HeaderLink to={HOME_ROUTE}>Home</HeaderLink>
            <HeaderLink to={TEACHERS_ROUTE}>Teachers</HeaderLink>
          </>
        )}
      </HederLinkContainer>
      <AuthContainer>
        {!isAuth ? (
          <>
            <LoginLink onClick={openModalLogin}>
              <LoginSvg src={loginIcon} alt="Log in" />
              <LoginText>Log in</LoginText>
            </LoginLink>
            <RegisterButton onClick={openModalRegister}>
              Registration
            </RegisterButton>
          </>
        ) : (
          <RegisterButton
            onClick={() => {
              dispatch(removeUser());
              dispatch(clearFavorite());
            }}
          >
            Log out
          </RegisterButton>
        )}
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
