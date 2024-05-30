import styled from "styled-components";

export const LanguageInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 14px 18px;
  background: var(--white);
  border-radius: 12px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: var(--color-text-second);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
`;

export const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    color: var(--black);
  }
`;

export const LevelInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Filter = styled.form`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
`;

export const FilterLanguage = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 221px; */
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
  padding: 16px 18px;
  /* max-width: 221px; */
  background: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
  outline: none;
`;

export const FilterLevel = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 198px; */
`;

export const LevelInput = styled.input`
  border-radius: 14px;
  padding: 14px 81px 14px 18px;
  /* max-width: 198px; */
  background: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
  outline: none;
`;

export const FilterPrice = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 124px; */
`;

export const PriceInput = styled.input`
  border-radius: 14px;
  padding: 14px 18px;
  /* max-width: 124px; */
  background: var(--white);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
  outline: none;
`;

export const ChevronIcon = styled.img`
  position: absolute;
  right: 8px;
  cursor: pointer;
  pointer-events: none;
  pointer-events: auto;
`;
