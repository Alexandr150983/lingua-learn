import React, { useEffect, useState } from "react";
import {
  AvatarImg,
  Backdrop,
  BookButton,
  CloseSvg,
  FormContainer,
  LessonTitle,
  PopUpBookTrialLessonContainer,
  PopUpBookTrialLessonText,
  PopUpBookTrialLessonTitle,
  RadioButtonContainer,
  Teacher,
} from "./PopUpBookTrialLesson.styled";
import Close from "../../assets/images/Icons/close.svg";

const PopUpBookTrialLesson = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Backdrop onClick={onClose}>
      <PopUpBookTrialLessonContainer onClick={(e) => e.stopPropagation()}>
        <PopUpBookTrialLessonTitle>Book trial lesson</PopUpBookTrialLessonTitle>
        <PopUpBookTrialLessonText>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </PopUpBookTrialLessonText>
        <Teacher>
          <AvatarImg src={12} alt="Teacher avatar" />
        </Teacher>
        <LessonTitle>
          What is your main reason for learning English?
        </LessonTitle>
        <RadioButtonContainer>
          <label>
            <input
              type="radio"
              value="Career and business"
              checked={selectedOption === "Career and business"}
              onChange={handleOptionChange}
            />
            Career and business
          </label>
          <label>
            <input
              type="radio"
              value="Lesson for kids"
              checked={selectedOption === "Lesson for kids"}
              onChange={handleOptionChange}
            />
            Lesson for kids
          </label>
          <label>
            <input
              type="radio"
              value="Living abroad"
              checked={selectedOption === "Living abroad"}
              onChange={handleOptionChange}
            />
            Living abroad
          </label>
          <label>
            <input
              type="radio"
              value="Exams and coursework"
              checked={selectedOption === "Exams and coursework"}
              onChange={handleOptionChange}
            />
            Exams and coursework
          </label>
          <label>
            <input
              type="radio"
              value="Culture, travel or hobby"
              checked={selectedOption === "Culture, travel or hobby"}
              onChange={handleOptionChange}
            />
            Culture, travel or hobby
          </label>
        </RadioButtonContainer>
        <FormContainer></FormContainer>
        <BookButton type="button" onClick={onClose}>
          Book
        </BookButton>
        <CloseSvg src={Close} alt="Close button" />
      </PopUpBookTrialLessonContainer>
    </Backdrop>
  );
};

export default PopUpBookTrialLesson;
