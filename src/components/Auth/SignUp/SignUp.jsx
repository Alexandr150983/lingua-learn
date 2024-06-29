import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import eyeOffSvg from "assets/images/Icons/eye-off.svg";

import {
  ErrorMessageDiv,
  EyeSvg,
  FormContainer,
  Label,
  SignUpButton,
  StyledField,
  StyledForm,
  Text,
  Title,
} from "./SignUp.styled";
import { setUser } from "../../../redux/Auth/authSlice";

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
          {errors.name && (
            <ErrorMessageDiv>{errors.name.message}</ErrorMessageDiv>
          )}
        </Label>

        <Label htmlFor="email">
          <StyledField
            type="email"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && (
            <ErrorMessageDiv>{errors.email.message}</ErrorMessageDiv>
          )}
        </Label>

        <Label htmlFor="password">
          <StyledField
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <span>
            <EyeSvg src={eyeOffSvg} alt="eye off" />
          </span>
          {errors.password && (
            <ErrorMessageDiv>{errors.password.message}</ErrorMessageDiv>
          )}
        </Label>

        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </StyledForm>
    </FormContainer>
  );
};

export default SignUpForm;
