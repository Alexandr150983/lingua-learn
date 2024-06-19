import styled from "styled-components";

export const SectionContainer = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* justify-content: center; */
  padding: 1.39vw 4.44vw;

  @media (min-width: 480px) {
    /* padding: 10px 24px; */
  }

  @media (min-width: 768px) {
    /* padding: 12px 32px; */
  }

  @media (min-width: 1440px) {
    /* padding: 20px 64px; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.39vw;
  gap: 1.67vw;

  @media (min-width: 480px) {
    /* margin-bottom: 8px;
    gap: 8px; */
  }

  @media (min-width: 768px) {
    /* margin-bottom: 10px;
    gap: 12px; */
  }

  @media (min-width: 1440px) {
    /* margin-bottom: 20px;
    gap: 24px; */
  }
`;

export const Tutors = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.1vw 8.47vw;
  border: 1.5px dashed var(--gold);
  border-radius: 30px;

  @media (min-width: 480px) {
    /* padding: 6px 12px; */
  }

  @media (min-width: 768px) {
    /* padding: 10px 18px; */
  }

  @media (min-width: 1440px) {
    /* padding: 44px 122px; */
  }
`;

export const Advantages = styled.div`
  padding-left: 4.44vw;
  padding-right: 7%.5;
  padding-top: 6.8vw;
  padding-bottom: 6.8vw;
  border-radius: 30px;
  background: var(--second-white);

  @media (min-width: 480px) {
    /* padding-left: 16px;
    padding-right: 26px;
    padding-top: 22px;
    padding-bottom: 22px; */
  }

  @media (min-width: 768px) {
    /* padding-left: 20px;
    padding-right: 30px;
    padding-top: 26px;
    padding-bottom: 26px; */
  }

  @media (min-width: 1440px) {
    /* padding-left: 64px;
    padding-right: 108px;
    padding-top: 98px;
    padding-bottom: 98px; */
  }
`;

export const HomeImg = styled.div`
  display: flex;
  border-radius: 30px;
  width: 568px;
  background: var(--third-gold);
`;

export const TitleAdvantages = styled.h1`
  margin-bottom: 2.22vw;
  padding-right: 7.5vw;
  max-width: 548px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (min-width: 480px) {
    /* margin-bottom: 10px; */
    font-size: 14px;
  }

  @media (min-width: 768px) {
    /* margin-bottom: 14px; */
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    /* margin-bottom: 32px; */
    font-size: 48px;
  }
`;

export const Language = styled.span`
  margin-right: 0.35vw;
  font-style: italic;
  font-weight: 400;
  border-radius: 8px;
  background: var(--third-gold);

  @media (min-width: 480px) {
    /* margin-right: 3px; */
  }

  @media (min-width: 768px) {
    /* margin-right: 4px; */
  }

  @media (min-width: 1440px) {
    /* margin-right: 5px; */
  }
`;

export const TextAdvantages = styled.p`
  margin-bottom: 4.44vw;
  padding-right: 8.33vw;
  max-width: 471px;
  font-size: 8px;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (min-width: 480px) {
    /* margin-bottom: 10px;
    padding-right: 16px; */
    font-size: 10px;
  }

  @media (min-width: 768px) {
    /* margin-bottom: 14px;
    padding-right: 20px; */
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    /* margin-bottom: 64px;
    padding-right: 120px; */
    font-size: 16px;
  }
`;

export const GetStart = styled.button`
  border-radius: 12px;
  padding: 1.11vw 6.11vw;
  font-size: 8px;
  background: var(--gold);
  font-weight: 700;
  line-height: 1.56;
  color: var(--black);

  @media (min-width: 480px) {
    /* padding: 6px 22px; */
    font-size: 10px;
  }

  @media (min-width: 768px) {
    /* padding: 10px 26px; */
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    /* padding: 16px 88px; */
    font-size: 18px;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  gap: 6.94vw;

  @media (min-width: 480px) {
    /* gap: 10px; */
  }

  @media (min-width: 768px) {
    /* gap: 16px; */
  }

  @media (min-width: 1440px) {
    /* gap: 100px; */
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1.11vw;

  @media (min-width: 480px) {
    /* gap: 6px; */
  }

  @media (min-width: 768px) {
    /* gap: 10px; */
  }

  @media (min-width: 1440px) {
    /* gap: 16px; */
  }
`;

export const TitleItem = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 6px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (min-width: 480px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const TextItem = styled.p`
  font-weight: 400;
  font-size: 6px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--color-text-third);

  @media (min-width: 480px) {
    font-size: 8px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;
