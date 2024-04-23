import { Formik } from "formik";
import * as yup from "yup";
import eyeOffSvg from "../../../assets/images/Icons/eye-off.svg";
import {
  ErrorMessageDiv,
  FormContainer,
  Label,
  LogInButton,
  StyledField,
  StyledForm,
  Text,
  Title,
} from "./SignIn.styled";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = ({ onClose }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    onClose();
  };

  return (
    <FormContainer>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <Label htmlFor="email">
            <StyledField type="text" name="email" placeholder="Email" />
          </Label>
          <ErrorMessageDiv name="email" component="div" />
          <Label htmlFor="password">
            <StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <span>
              <img src={eyeOffSvg} alt="eye off" />
            </span>
          </Label>
          <ErrorMessageDiv name="password" component="div" />
          <LogInButton type="submit">Log in</LogInButton>
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};

export default SignInForm;
