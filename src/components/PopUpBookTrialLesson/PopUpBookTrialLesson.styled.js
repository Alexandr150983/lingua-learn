import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopUpBookTrialLessonContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  border-radius: 30px;
  max-width: 599px;
  max-height: 971px;
  overflow: auto;
  background-color: var(--white);
`;

export const PopUpBookTrialLessonTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const PopUpBookTrialLessonText = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: var(--color-text-third);
`;

export const TeacherContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const LessonTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  color: var(--black);
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`;

export const BookButton = styled.button`
  border-radius: 12px;
  padding: 16px 215px;
  width: 472px;
  height: 60px;
  background: var(--gold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: var(--black);
`;

export const CloseSvg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
export const AvatarImg = styled.img`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;

export const Teacher = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: var(--black);
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioSelected = styled.img`
  border-radius: 12px;
  width: 24px;
  height: 24px;
`;

export const RadioUnselected = styled.img`
  border-radius: 10px;
  width: 24px;
  height: 24px;
`;

export const FormInput = styled.input`
  border: 1px solid var(--color-text-second);
  border-radius: 12px;
  padding: 16px;
  max-width: 472px;
  max-height: 54px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: var(--black);
`;

export const TeacherText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: var(--color-text-fourth);
`;

export const TeacherTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;
