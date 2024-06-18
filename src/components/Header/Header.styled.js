import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;

  @media (min-width: 480px) {
    padding: 10px 40px;
  }

  @media (min-width: 768px) {
    padding: 12px 76px;
  }

  @media (min-width: 1024px) {
    padding: 20px 128px;
  }
`;

export const HederLinkContainer = styled.nav`
  display: flex;
  gap: 8px;

  @media (min-width: 480px) {
    gap: 12px;
  }

  @media (min-width: 768px) {
    gap: 18px;
  }

  @media (min-width: 1024px) {
    gap: 28px;
  }
`;

export const LoginText = styled.span`
  margin-left: 2px;
  font-weight: 700;
  font-size: 8px;
  line-height: 1.25;
  color: var(--black);

  @media (min-width: 480px) {
    margin-left: 4px;
    font-size: 10px;
  }

  @media (min-width: 768px) {
    margin-left: 6px;
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    margin-left: 8px;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const RegisterButton = styled.button`
  border-radius: 12px;
  padding: 4px 10px;
  background: var(--black);
  font-weight: 700;
  font-size: 8px;
  line-height: 1.25;
  color: var(--white);

  @media (min-width: 480px) {
    padding: 6px 16px;
    font-size: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px 24px;
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    padding: 14px 40px;
    font-size: 16px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 6px;

  @media (min-width: 480px) {
    gap: 8px;
  }

  @media (min-width: 768px) {
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 16px;
  }
`;

export const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  color: var(--black);

  @media (min-width: 480px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
