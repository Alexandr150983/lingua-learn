import styled from "styled-components";

export const TeachersContainer = styled.section`
  background: #f8f8f8;
`;

export const Filter = styled.form`
  display: flex;
  gap: 20px;
  padding-left: 128px;
  padding-top: 96px;
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

export const TeacherCard = styled.div``;

export const TeacherCardList = styled.ul``;

export const TeacherItem = styled.li`
  display: flex;
  gap: 48px;
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
  width: 968px;
  height: 280px;
`;

export const CardInfo = styled.div``;

export const LevelInfoList = styled.ul`
  display: flex;
`;

export const LevelInfoItem = styled.li`
  border: 1px solid var(-color-text-second);
  border-radius: 35px;
  padding: 8px 12px;
`;
