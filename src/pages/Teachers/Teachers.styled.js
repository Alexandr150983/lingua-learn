import styled from "styled-components";

export const TeachersContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.67vw 8.89vw;
  background: var(--second-white);
`;

export const TeacherCardList = styled.ul`
  display: flex;
  gap: 2.22vw;
  flex-direction: column;
  padding: 0;
`;

export const LoadMoreButton = styled.button`
  border-radius: 0.83vw;
  padding: 1.11vw 3.33vw;
  margin: auto;
  margin-top: 4.44vw;
  /* max-width: 183px;
  max-height: 60px; */
  background: var(--gold);
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.56;
  color: var(--black);
`;
