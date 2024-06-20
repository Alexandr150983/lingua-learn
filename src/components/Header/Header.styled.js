import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4vw 8.9vw;
`;

export const HederLinkContainer = styled.nav`
  display: flex;
  gap: 1.94vw;
`;

export const LoginText = styled.span`
  margin-left: 0.55vw;
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.25;
  color: var(--black);
`;

export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LoginSvg = styled.img`
  width: 1.39vw;
`;

export const RegisterButton = styled.button`
  border-radius: 0.84vw;
  padding: 0.97vw 2.77vw;
  background: var(--black);
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.25;
  color: var(--white);
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 1.11vw;
`;

export const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.25;
  color: var(--black);
`;
