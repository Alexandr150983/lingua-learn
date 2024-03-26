import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 9%;
`;
export const LogoText = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
`;
export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
