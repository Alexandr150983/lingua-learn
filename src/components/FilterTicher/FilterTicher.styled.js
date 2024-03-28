import styled from "styled-components";

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
