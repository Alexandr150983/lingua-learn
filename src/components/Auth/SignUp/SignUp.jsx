import { Formik } from "formik";
import * as yup from "yup";
import eyeOffSvg from "../../../assets/images/Icons/eye-off.svg";
import {
  ErrorMessageDiv,
  FormContainer,
  Label,
  SignUpButton,
  StyledField,
  StyledForm,
  Text,
  Title,
} from "./SignUp.styled";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = ({ onClose }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    onClose();
  };

  return (
    <FormContainer>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <Label htmlFor="name">
            <StyledField type="text" name="name" placeholder="Name" />
          </Label>
          <ErrorMessageDiv name="name" component="div" />
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
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};

export default SignUpForm;
