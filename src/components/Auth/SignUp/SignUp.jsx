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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { email, password } = data;
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      reset();
      onClose();
    } catch (error) {
      setErrorMessage("Invalid user!");
    }
  };

  return (
    <FormContainer>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">
          <StyledField type="text" {...register("name")} placeholder="Name" />
        </Label>
        {errors.name && (
          <ErrorMessageDiv>{errors.name.message}</ErrorMessageDiv>
        )}
        <Label htmlFor="email">
          <StyledField type="text" {...register("email")} placeholder="Email" />
        </Label>
        {errors.email && (
          <ErrorMessageDiv>{errors.email.message}</ErrorMessageDiv>
        )}
        <Label htmlFor="password">
          <StyledField
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <span>
            <img src={eyeOffSvg} alt="eye off" />
          </span>
        </Label>
        {errors.password && (
          <ErrorMessageDiv>{errors.password.message}</ErrorMessageDiv>
        )}
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </StyledForm>
    </FormContainer>
  );
};

export default SignUpForm;
