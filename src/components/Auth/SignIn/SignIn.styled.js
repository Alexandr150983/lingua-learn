import styled from "styled-components";

export const FormContainer = styled.div`
  border-radius: 2.08vw;
  background: var(--white);
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2.78vw;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
  margin: 1.39vw 0px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.37;
  color: var(--color-text-third);
  margin-bottom: 2.78vw;
`;

export const ErrorMessageDiv = styled.div`
  color: var(--toastify-color-error);
  padding-left: 1.11vw;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.11vw;
`;

export const StyledField = styled.input`
  flex: 1;
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.37;
  color: var(--black);
  outline: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-text-second);
  border-radius: 0.83vw;
  padding: 1.11vw 1.25vw;
`;

export const LogInButton = styled.button`
  margin-top: 2.78vw;
  border-radius: 0.83vw;
  padding: 1.11vw;
  height: 4.17vw;
  background: var(--gold);
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.56;
  color: var(--black);
`;

export const EyeSvg = styled.img`
  width: 1.39vw;
`;
