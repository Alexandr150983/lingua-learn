import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2.08vw;
  background: var(--white);
`;

export const PopUpBookTrialLessonTitle = styled.h2`
  margin-bottom: 1.39vw;
  font-weight: 500;
  font-size: 2.78vw;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const PopUpBookTrialLessonText = styled.p`
  margin-bottom: 1.39vw;
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.37;
  color: var(--color-text-third);
`;

export const TeacherContainer = styled.div`
  display: flex;
  gap: 0.97vw;
  margin-bottom: 2.78vw;
`;

export const AvatarImg = styled.img`
  border-radius: 6.94vw;
  width: 3.06vw;
  height: 3.06vw;
`;

export const Teacher = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeacherText = styled.p`
  font-weight: 500;
  font-size: 0.83vw;
  line-height: 1.33;
  color: var(--color-text-fourth);
`;

export const TeacherTitle = styled.h4`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const LessonTitle = styled.h3`
  margin-bottom: 1.39vw;
  font-weight: 500;
  font-size: 1.67vw;
  line-height: 1.33;
  color: var(--black);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.78vw;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.11vw;
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 0.56vw;
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.37;
  color: var(--black);
`;

export const RadioInput = styled.input`
  display: none;
`;

export const ErrorMessageDiv = styled.div`
  color: var(--toastify-color-error);
  padding-left: 2.22vw;
  font-size: 1.11vw;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25vw;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  border: 0.07vw solid var(--color-text-second);
  border-radius: 0.83vw;
  padding: 1.11vw 1.25vw;
`;

export const StyledField = styled.input`
  flex: 1;
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.37;
  color: var(--black);
  outline: none;
`;

export const BookButton = styled.button`
  border-radius: 0.83vw;
  padding: 1.11vw;
  background: var(--gold);
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.56;
  color: var(--black);
`;
