import { Formik } from "formik";
import * as yup from "yup";
import eyeOffSvg from "assets/images/Icons/eye-off.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/Auth/authSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Too Short Password!")
    .max(16, "Too Long Password!")
    .required("Required"),
});

const SignUpForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch((error) => {
        setErrorMessage("Invalid user!");
      });
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
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};

export default SignUpForm;
