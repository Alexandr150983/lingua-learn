import styled from "styled-components";

export const TeacherItemContainer = styled.li`
  position: relative;
  display: flex;
  gap: 48px;
  /* margin-bottom: 32px; */
  border-radius: 24px;
  padding: 24px;
  /* width: 1184px; */
  background-color: var(--white);
`;

// export const TeacherItem = styled.li`
//   position: relative;
//   display: flex;
//   gap: 48px;
//   margin-bottom: 32px;
//   border-radius: 24px;
//   padding: 24px;
//   width: 1184px;
//   /* max-height: 328px; */
//   background-color: var(--white);
// `;
export const FavoriteButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  transform: translate(50%, -50%);
  background-color: transparent;
  cursor: pointer;
`;

export const HeartIconActive = styled.img``;
export const HeartIconNormal = styled.img``;

export const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--third-gold);
  border-radius: 100px;
  min-width: 120px;
  height: 120px;
  background: var(--white);
`;
export const AvatarImg = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`;

export const SvgStatus = styled.img`
  position: absolute;
  left: 85px;
  bottom: 89px;
`;

export const InfoTeacherContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 968px; */
  /* height: 280px; */
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 968px; */
  /* height: 216px; */
  margin-bottom: 32px;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  align-items: flex-start;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCardText = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-fourth);
`;

export const TitleCardTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: var(--black);
`;

export const BookSvg = styled.img``;

export const PipeImg = styled.img``;

export const StarSvg = styled.img``;

export const TitleInfoList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const LessonsOnline = styled.li`
  display: flex;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;

export const LessonsDone = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;

export const Rating = styled.li`
  display: flex;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;
export const Price = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;

export const PriceSpan = styled.span`
  color: var(--color-text-five);
`;

export const InfoTeacher = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  gap: 8px;
`;

export const InfoSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;

export const Conditions = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: var(--color-text-fourth);
`;

export const LessonInfo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: var(--color-text-fourth);
`;

export const Speaks = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: var(--color-text-fourth);
`;
export const InfoSpanUnderline = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--black);
`;

export const ReadMore = styled.button`
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--black);
  width: 90px;
  background-color: transparent;
`;

export const LevelInfoList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const LevelInfoItem = styled.li`
  display: flex;
  border: 1px solid var(--color-text-second);
  border-radius: 35px;
  padding: 8px 12px;
  height: 32px;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  color: var(--black);

  &:first-of-type,
  &:active {
    background: var(--gold);
  }
`;

export const Experience = styled.p`
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
`;

export const ShowMoreInfoContainer = styled.div``;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
`;

export const ReviewsItem = styled.li``;

export const Reviewer = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-fourth);
`;

export const ReviewerRating = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--black);
`;

export const ReviewerText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
`;

export const BookTrialLessonButton = styled.button`
  border-radius: 12px;
  padding: 16px 48px;
  max-width: 232px;
  height: 60px;
  background: var(--gold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: var(--black);
`;
