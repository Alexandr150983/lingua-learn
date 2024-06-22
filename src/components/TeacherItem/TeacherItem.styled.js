import styled from "styled-components";

export const TeacherItemContainer = styled.li`
  position: relative;
  display: flex;
  gap: 3.33vw;
  border-radius: 1.67vw;
  padding: 1.67vw;
  background-color: var(--white);
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1.67vw;
  right: 1.67vw;
  transform: translate(50%, -50%);
  background-color: transparent;
  cursor: pointer;
`;

export const HeartIconActive = styled.img`
  width: 1.8vw;
  height: 1.8vw;
`;
export const HeartIconNormal = styled.img`
  width: 1.8vw;
  height: 1.8vw;
`;

export const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.21vw solid var(--third-gold);
  border-radius: 6.94vw;
  min-width: 8.33vw;
  height: 8.33vw;
  background: var(--white);
`;

export const AvatarImg = styled.img`
  border-radius: 100px;
  width: 6.67vw;
  height: 6.67vw;
`;

export const SvgStatus = styled.img`
  position: absolute;
  left: 5.9vw;
  bottom: 5.9vw;
  width: 0.83vw;
  height: 0.83vw;
`;

export const InfoTeacherContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.22vw;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  margin-bottom: 2.22vw;
  align-items: flex-start;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCardText = styled.p`
  margin-bottom: 0.56vw;
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--color-text-fourth);
`;

export const TitleCardTitle = styled.h2`
  font-weight: 500;
  font-size: 1.67vw;
  line-height: 1;
  color: var(--black);
`;

export const BookSvg = styled.img`
  width: 1.11vw;
`;

export const PipeImg = styled.img`
  width: 0.14vw;
`;

export const StarSvg = styled.img`
  width: 1.11vw;
`;

export const TitleInfoList = styled.ul`
  display: flex;
  gap: 1.11vw;
`;

export const LessonsOnline = styled.li`
  display: flex;
  gap: 0.56vw;
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const LessonsDone = styled.li`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const Rating = styled.li`
  display: flex;
  gap: 0.56vw;
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const Price = styled.li`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const PriceSpan = styled.span`
  color: var(--color-text-five);
`;

export const InfoTeacher = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.56vw;
`;

export const InfoSpan = styled.span`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const Conditions = styled.p`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  text-decoration: none;
  color: var(--color-text-fourth);
`;

export const LessonInfo = styled.p`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  text-decoration: none;
  color: var(--color-text-fourth);
`;

export const Speaks = styled.p`
  font-weight: 500;
  font-size: 1.11vw;
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
  font-size: 1.11vw;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--black);
  background-color: transparent;
`;

export const LevelInfoList = styled.ul`
  display: flex;
  gap: 0.56vw;
`;

export const LevelInfoItem = styled.li`
  display: flex;
  border: 0.07vw solid var(--color-text-second);
  border-radius: 2.43vw;
  padding: 0.56vw 0.83vw;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.97vw;
  line-height: 1.14;
  color: var(--black);

  &:first-of-type,
  &:active {
    background: var(--gold);
  }
`;

export const ShowMoreInfoContainer = styled.div``;

export const Experience = styled.p`
  margin-bottom: 2.22vw;
  font-weight: 400;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.22vw;
  padding: 0;
`;

export const ReviewsItem = styled.li``;

export const Reviewer = styled.h3`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--color-text-fourth);
`;

export const ReviewerRating = styled.div`
  display: flex;
  gap: 0.56vw;
  font-weight: 500;
  font-size: 0.97vw;
  line-height: 1.29;
  color: var(--black);
`;

export const ReviewerText = styled.p`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;

export const BookTrialLessonButton = styled.button`
  border-radius: 0.83vw;
  padding: 1.11vw 3.33vw;
  margin-top: 2.22vw;
  max-width: 16.11vw;
  background: var(--gold);
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.56;
  color: var(--black);
`;

export const TextContainer = styled.div``;

export const Text = styled.p`
  font-weight: 500;
  font-size: 1.11vw;
  line-height: 1.5;
  color: var(--black);
`;
