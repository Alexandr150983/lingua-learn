import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoText = styled.span`
  margin-left: 0.55vw;
  font-weight: 500;
  font-size: 1.38vw;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const LogoSvg = styled.img`
  width: 1.95vw;
`;
