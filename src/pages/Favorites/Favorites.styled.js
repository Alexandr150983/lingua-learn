import styled from "styled-components";

export const TeachersContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 96px 128px;
  background: var(--second-white);
`;

export const TeacherCardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const TeacherItem = styled.li`
  position: relative;
  display: flex;
  gap: 48px;
  margin-bottom: 32px;
  border-radius: 24px;
  padding: 24px;
  width: 1184px;
  /* max-height: 328px; */
  background-color: var(--white);
`;
