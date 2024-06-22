import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AvatarImg,
  BookButton,
  ErrorMessageDiv,
  FormContainer,
  InputContainer,
  Label,
  LessonTitle,
  PopUpBookTrialLessonText,
  PopUpBookTrialLessonTitle,
  RadioButtonContainer,
  RadioInput,
  RadioLabel,
  StyledField,
  StyledForm,
  Teacher,
  TeacherContainer,
  TeacherText,
  TeacherTitle,
} from "./PopUpBookTrialLesson.styled";
import RadioCheckSelected from "../../assets/images/Icons/RadioButtonCheck.svg";
import RadioCheckUnselected from "../../assets/images/Icons/RadioButton.svg";
import RadioButton from "../RadioButton/RadioButton";

const schema = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phoneNumber: yup
    .string()
    .min(10, "Too Short!")
    .max(13, "Too Long!")
    .required("Required"),
  reason: yup.string().required("Required"),
});

const PopUpBookTrialLesson = ({
  teacherAvatar,
  teacherName,
  teacherSurname,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const selectedReason = watch("reason");

  return (
    <FormContainer>
      <PopUpBookTrialLessonTitle>Book trial lesson</PopUpBookTrialLessonTitle>
      <PopUpBookTrialLessonText>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </PopUpBookTrialLessonText>
      <TeacherContainer>
        <AvatarImg src={teacherAvatar} alt="Teacher avatar" />
        <Teacher>
          <TeacherText>Your teacher</TeacherText>
          <TeacherTitle>
            {teacherName} {teacherSurname}
          </TeacherTitle>
        </Teacher>
      </TeacherContainer>
      <LessonTitle>What is your main reason for learning English?</LessonTitle>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <RadioButtonContainer>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="Career and business"
              {...register("reason")}
            />
            <RadioButton
              selected={selectedReason === "Career and business"}
              selectedSrc={RadioCheckSelected}
              unselectedSrc={RadioCheckUnselected}
            />
            Career and business
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="Lesson for kids"
              {...register("reason")}
            />
            <RadioButton
              selected={selectedReason === "Lesson for kids"}
              selectedSrc={RadioCheckSelected}
              unselectedSrc={RadioCheckUnselected}
            />
            Lesson for kids
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="Living abroad"
              {...register("reason")}
            />
            <RadioButton
              selected={selectedReason === "Living abroad"}
              selectedSrc={RadioCheckSelected}
              unselectedSrc={RadioCheckUnselected}
            />
            Living abroad
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="Exams and coursework"
              {...register("reason")}
            />
            <RadioButton
              selected={selectedReason === "Exams and coursework"}
              selectedSrc={RadioCheckSelected}
              unselectedSrc={RadioCheckUnselected}
            />
            Exams and coursework
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="Culture, travel or hobby"
              {...register("reason")}
            />
            <RadioButton
              selected={selectedReason === "Culture, travel or hobby"}
              selectedSrc={RadioCheckSelected}
              unselectedSrc={RadioCheckUnselected}
            />
            Culture, travel or hobby
          </RadioLabel>
        </RadioButtonContainer>
        <InputContainer>
          <Label htmlFor="fullName">
            <StyledField
              type="text"
              {...register("fullName")}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <ErrorMessageDiv>{errors.fullName.message}</ErrorMessageDiv>
            )}
          </Label>

          <Label htmlFor="email">
            <StyledField
              type="text"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && (
              <ErrorMessageDiv>{errors.email.message}</ErrorMessageDiv>
            )}
          </Label>

          <Label htmlFor="phoneNumber">
            <StyledField
              type="text"
              {...register("phoneNumber")}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <ErrorMessageDiv>{errors.phoneNumber.message}</ErrorMessageDiv>
            )}
          </Label>
        </InputContainer>
        <BookButton type="submit">Book</BookButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PopUpBookTrialLesson;
