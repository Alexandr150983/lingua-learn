import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 64px;
`;
export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const Advantages = styled.div`
  padding-left: 64px;
  padding-right: 108px;
  padding-top: 98px;
  padding-bottom: 98px;
  margin-right: 24px;
  border-radius: 30px;
  width: 720px;
  height: 530px;
  background: #f8f8f8;
`;

export const HomeImg = styled.div`
  border-radius: 30px;
  width: 568px;
  height: 530px;
  background: #fbe9ba;
`;

export const TitleAdvantages = styled.h1`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--black);
`;
export const Language = styled.span`
  margin-right: 5px;
  font-style: italic;
  font-weight: 400;
  border-radius: 8px;
  width: 195px;
  height: 40px;
  background: var(--third-gold);
`;

export const TextAdvantages = styled.p`
  margin-bottom: 64px;
  padding-right: 87px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const GetStart = styled.button`
  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;
  background: var(--gold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: var(--black);
`;
export const Tutors = styled.div`
  display: flex;
  justify-content: center;
  border: 1.5px dashed var(--gold);
  border-radius: 30px;
  width: 1312px;
  height: 116px;
`;
export const ListItems = styled.ul`
  display: flex;
  gap: 100px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TitleItem = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const TextItem = styled.p`
  max-width: 74px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--color-text-third);
`;
