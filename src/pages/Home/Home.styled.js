import styled from "styled-components";

export const SectionContainer = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* align-items: center; */
  padding: 20px 64px;

  @media (max-width: 480px) {
    padding: 8px 26px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 12px 38px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 16px 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 24px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
    gap: 6px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 12px;
    gap: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 16px;
    gap: 14px;
  }
`;

export const Tutors = styled.div`
  display: flex;
  justify-content: center;
  padding: 45px 120px;
  border: 1.5px dashed var(--gold);
  border-radius: 30px;

  @media (max-width: 480px) {
    padding: 5px 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 28px 72px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 34px 90px;
  }
`;

export const Advantages = styled.div`
  padding-left: 64px;
  padding-right: 108px;
  padding-top: 98px;
  padding-bottom: 98px;
  border-radius: 30px;
  /* width: 720px;
  height: 530px; */
  background: var(--second-white);

  @media (max-width: 480px) {
    padding-left: 6px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding-left: 28px;
    padding-right: 38px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 48px;
    padding-right: 82px;
    padding-top: 74px;
    padding-bottom: 74px;
  }
`;

export const HomeImg = styled.div`
  display: flex;
  border-radius: 30px;
  /* max-width: 568px;
  max-height: 530px; */
  background: var(--third-gold);
`;

export const TitleAdvantages = styled.h1`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (max-width: 480px) {
    margin-bottom: 8px;
    font-size: 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;

export const Language = styled.span`
  margin-right: 5px;
  font-style: italic;
  font-weight: 400;
  border-radius: 8px;
  background: var(--third-gold);

  @media (max-width: 480px) {
    margin-right: 2px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-right: 3px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 4px;
  }
`;

export const TextAdvantages = styled.p`
  margin-bottom: 64px;
  padding-right: 120px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (max-width: 480px) {
    margin-bottom: 16px;
    padding-right: 14px;
    font-size: 6px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 30px;
    padding-right: 58px;
    font-size: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 42px;
    padding-right: 90px;
    font-size: 10px;
  }
`;

export const GetStart = styled.button`
  border-radius: 12px;
  padding: 16px 88px;
  background: var(--gold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: var(--black);

  @media (max-width: 480px) {
    padding: 4px 20px;
    font-size: 8px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 10px 52px;
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 12px 66px;
    font-size: 12px;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  gap: 100px;

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 25px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 50px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 6px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 12px;
  }
`;

export const TitleItem = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: var(--black);

  @media (max-width: 480px) {
    font-size: 8px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const TextItem = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--color-text-third);

  @media (max-width: 480px) {
    font-size: 6px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 10px;
  }
`;
