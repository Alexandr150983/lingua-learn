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
  font-size: 8px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (min-width: 480px) {
    /* margin-left: 4px; */
    font-size: 10px;
  }

  @media (min-width: 768px) {
    /* margin-left: 6px; */
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    /* margin-left: 8px; */
    font-size: 20px;
  }

  @media (min-width: 1400px) {
    /* margin-left: 8px; */
    font-size: 20px;
  }
`;
