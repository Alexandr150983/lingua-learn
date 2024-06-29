import React from "react";

import logoIcon from "assets/images/logo-header.svg";

import { LinkStyled, LogoContainer, LogoSvg, LogoText } from "./Logo.styled";
import { HOME_ROUTE } from "constants/routes";

const Logo = () => {
  return (
    <LogoContainer>
      <LinkStyled to={HOME_ROUTE}>
        <LogoSvg src={logoIcon} alt="Logo" />
        <LogoText>LearnLingo</LogoText>
      </LinkStyled>
    </LogoContainer>
  );
};

export default Logo;
