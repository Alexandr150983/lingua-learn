import React, { useState } from "react";
// import { Formik } from "formik";

import {
  AvatarImg,
  BookButton,
  FormContainer,
  FormInput,
  LessonTitle,
  PopUpBookTrialLessonText,
  PopUpBookTrialLessonTitle,
  RadioButtonContainer,
  RadioInput,
  RadioLabel,
  Teacher,
  TeacherContainer,
  TeacherText,
  TeacherTitle,
} from "./PopUpBookTrialLesson.styled";
import RadioCheckSelected from "../../assets/images/Icons/RadioButtonCheck.svg";
import RadioCheckUnselected from "../../assets/images/Icons/RadioButton.svg";
import RadioButton from "../RadioButton/RadioButton";
import Modal from "../Modal/Modal";

const PopUpBookTrialLesson = ({
  isOpen,
  onClose,
  teacherAvatar,
  teacherName,
  teacherSurname,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [fullNameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumberValue(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
      <RadioButtonContainer>
        <RadioLabel>
          <RadioInput
            type="radio"
            aria-label="Career and business"
            value="Career and business"
            checked={selectedOption === "Career and business"}
            onChange={handleOptionChange}
          />
          <RadioButton
            selected={selectedOption === "Career and business"}
            selectedSrc={RadioCheckSelected}
            unselectedSrc={RadioCheckUnselected}
          />
          Career and business
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            aria-label="Lesson for kids"
            value="Lesson for kids"
            checked={selectedOption === "Lesson for kids"}
            onChange={handleOptionChange}
          />
          <RadioButton
            selected={selectedOption === "Lesson for kids"}
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
            checked={selectedOption === "Living abroad"}
            onChange={handleOptionChange}
          />
          <RadioButton
            selected={selectedOption === "Living abroad"}
            selectedSrc={RadioCheckSelected}
            unselectedSrc={RadioCheckUnselected}
          />
          Living abroad
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            aria-label="Exams and coursework"
            value="Exams and coursework"
            checked={selectedOption === "Exams and coursework"}
            onChange={handleOptionChange}
          />
          <RadioButton
            selected={selectedOption === "Exams and coursework"}
            selectedSrc={RadioCheckSelected}
            unselectedSrc={RadioCheckUnselected}
          />
          Exams and coursework
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            aria-label="Culture, travel or hobby"
            value="Culture, travel or hobby"
            checked={selectedOption === "Culture, travel or hobby"}
            onChange={handleOptionChange}
          />
          <RadioButton
            selected={selectedOption === "Culture, travel or hobby"}
            selectedSrc={RadioCheckSelected}
            unselectedSrc={RadioCheckUnselected}
          />
          Culture, travel or hobby
        </RadioLabel>
      </RadioButtonContainer>
      <FormContainer>
        <FormInput
          type="text"
          value={fullNameValue}
          onChange={handleFullNameChange}
          placeholder="Full Name"
        />
        <FormInput
          type="text"
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <FormInput
          type="text"
          value={phoneNumberValue}
          onChange={handlePhoneNumberChange}
          placeholder="Phone Number"
        />
      </FormContainer>
      <BookButton type="button">Book</BookButton>
    </Modal>
  );
};

export default PopUpBookTrialLesson;
