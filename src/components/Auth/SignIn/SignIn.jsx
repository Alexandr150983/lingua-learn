import { Formik } from "formik";
import * as yup from "yup";
import eyeOffSvg from "assets/images/Icons/eye-off.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/Auth/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const SignInForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        onClose();
      })
      .catch((error) => {
        setErrorMessage("Invalid user!");
      });
    resetForm();
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
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          <LogInButton type="submit">Log in</LogInButton>
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};

export default SignInForm;
