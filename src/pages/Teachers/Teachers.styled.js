import styled from "styled-components";

export const TeachersContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 96px 128px;
  background: var(--second-white);
`;

export const TeacherCardList = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: column;
  padding: 0;
`;

export const LoadMoreButton = styled.button`
  border-radius: 12px;
  padding: 16px 48px;
  margin: auto;
  margin-top: 32px;
  max-width: 183px;
  max-height: 60px;
  background: var(--gold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: var(--black);
`;
