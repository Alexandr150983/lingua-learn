import React from "react";
import logoIcon from "../../../assets/images/logo-header.svg";
import { HOME_ROUTE } from "../../../constants/routes";
import { LinkStyled, LogoContainer, LogoText } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer>
      <LinkStyled to={HOME_ROUTE}>
        <img src={logoIcon} alt="Logo" />
        <LogoText>LearnLingo</LogoText>
      </LinkStyled>
    </LogoContainer>
  );
};

export default Logo;
