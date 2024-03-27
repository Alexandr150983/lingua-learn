import styled from "styled-components";

export const TeachersContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 96px 128px;
  background: var(--second-white);
`;

export const Filter = styled.form`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
`;

export const FilterLanguage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 221px;
`;

export const FilterLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--color-text-fourth);
`;

export const LanguageInput = styled.input`
  border-radius: 14px;
  padding: 16px 148px 16px 18px;
  max-width: 221px;
  background: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
`;

export const FilterLevel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 198px;
`;

export const LevelInput = styled.input`
  border-radius: 14px;
  padding: 14px 81px 14px 18px;
  max-width: 198px;
  background: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
`;

export const FilterPrice = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 124px;
`;

export const PriceInput = styled.input`
  border-radius: 14px;
  padding: 14px 18px;
  max-width: 124px;
  background: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
`;

export const TeacherCardList = styled.ul`
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
  height: 328px;
  background-color: var(--white);
`;

export const HeartSvg = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  transform: translate(50%, -50%);
  cursor: pointer;
`;
export const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--third-gold);
  border-radius: 100px;
  width: 120px;
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
  width: 968px;
  height: 280px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 968px;
  height: 216px;
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
  flex-direction: column;
  gap: 8px;
`;

export const Conditions = styled.p``;

export const LessonInfo = styled.p``;

export const Speaks = styled.p``;

export const ReadMore = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--black);
  cursor: pointer;
`;

export const LevelInfoList = styled.ul`
  display: flex;
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
