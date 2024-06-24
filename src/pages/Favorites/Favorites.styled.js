import styled from "styled-components";

export const StyledFavorite = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.67vw 8.89vw;
  background: var(--second-white);
`;

export const TeacherCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.22vw;
  padding: 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.39vw;
  line-height: 2;
  margin: 3.47vw 0;
`;

export const CenteredMessage = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
