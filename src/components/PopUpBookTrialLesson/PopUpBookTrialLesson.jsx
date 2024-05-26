import { Formik } from "formik";
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
});

const PopUpBookTrialLesson = ({
  teacherAvatar,
  teacherName,
  teacherSurname,
}) => {
  const initialValues = {
    reason: "",
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

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
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <StyledForm autoComplete="off">
            <RadioButtonContainer>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="reason"
                  value="Career and business"
                />
                <RadioButton
                  selected={formikProps.values.reason === "Career and business"}
                  selectedSrc={RadioCheckSelected}
                  unselectedSrc={RadioCheckUnselected}
                />
                Career and business
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="Lesson for kids"
                  name="reason"
                />
                <RadioButton
                  selected={formikProps.values.reason === "Lesson for kids"}
                  selectedSrc={RadioCheckSelected}
                  unselectedSrc={RadioCheckUnselected}
                />
                Lesson for kids
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  aria-label="Living abroad"
                  value="Living abroad"
                  name="reason"
                />
                <RadioButton
                  selected={formikProps.values.reason === "Living abroad"}
                  selectedSrc={RadioCheckSelected}
                  unselectedSrc={RadioCheckUnselected}
                />
                Living abroad
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="Exams and coursework"
                  name="reason"
                />
                <RadioButton
                  selected={
                    formikProps.values.reason === "Exams and coursework"
                  }
                  selectedSrc={RadioCheckSelected}
                  unselectedSrc={RadioCheckUnselected}
                />
                Exams and coursework
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="Culture, travel or hobby"
                  name="reason"
                />
                <RadioButton
                  selected={
                    formikProps.values.reason === "Culture, travel or hobby"
                  }
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
                  name="fullName"
                  placeholder="Full Name"
                />
              </Label>
              <ErrorMessageDiv name="fullName" component="div" />
              <Label htmlFor="email">
                <StyledField type="text" name="email" placeholder="Email" />
              </Label>
              <ErrorMessageDiv name="email" component="div" />
              <Label htmlFor="phoneNumber">
                <StyledField
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
              </Label>
              <ErrorMessageDiv name="phoneNumber" component="div" />
            </InputContainer>
            <BookButton type="submit">Book</BookButton>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default PopUpBookTrialLesson;
