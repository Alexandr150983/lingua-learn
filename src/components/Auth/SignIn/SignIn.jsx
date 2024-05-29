import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    const auth = getAuth();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
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
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
        <LogInButton type="submit">Log in</LogInButton>
      </StyledForm>
    </FormContainer>
  );
};

export default SignInForm;
