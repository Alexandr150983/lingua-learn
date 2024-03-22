import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 20px;
  margin: 20px 128px;
`;

export const LogoText = styled.span`
  margin-left: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: var(--black);
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--black);
`;

export const RegisterButton = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background: var(--black);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white);
`;

export const HederLinkContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const HeaderLink = styled(Link)``;
