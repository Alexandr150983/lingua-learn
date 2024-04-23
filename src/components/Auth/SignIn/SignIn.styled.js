import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  border-radius: 30px;
  background: var(--white);
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
  margin: 20px 0px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: var(--color-text-third);
  margin-bottom: 40px;
`;

export const ErrorMessageDiv = styled(ErrorMessage)`
  color: var(--toastify-color-error);
  padding-left: 16px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledField = styled(Field)`
  flex: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: var(--black);
  outline: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-text-second);
  border-radius: 12px;
  padding: 16px 18px;
`;

export const LogInButton = styled.button`
  margin-top: 40px;
  border-radius: 12px;
  padding: 16px;
  height: 60px;
  background: var(--gold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: var(--black);
`;
