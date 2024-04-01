import React, { useEffect, useState } from "react";
import {
  AvatarImg,
  Backdrop,
  BookButton,
  CloseSvg,
  FormContainer,
  FormInput,
  LessonTitle,
  PopUpBookTrialLessonContainer,
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
import Close from "../../assets/images/Icons/close.svg";

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

  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

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
    <Backdrop onClick={onClose}>
      <PopUpBookTrialLessonContainer onClick={stopPropagation}>
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
        <LessonTitle>
          What is your main reason for learning English?
        </LessonTitle>
        <RadioButtonContainer>
          <RadioLabel>
            <RadioInput
              type="radio"
              aria-label="Career and business"
              value="Career and business"
              checked={selectedOption === "Career and business"}
              onChange={handleOptionChange}
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
        <BookButton type="button" onClick={onClose}>
          Book
        </BookButton>
        <CloseSvg src={Close} alt="Close button" onClick={onClose} />
      </PopUpBookTrialLessonContainer>
    </Backdrop>
  );
};

export default PopUpBookTrialLesson;
