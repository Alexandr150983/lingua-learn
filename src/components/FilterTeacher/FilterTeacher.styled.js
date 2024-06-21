import styled from "styled-components";

export const Filter = styled.form`
  display: flex;
  gap: 1.39vw;
  margin-bottom: 2.22vw;
`;

export const FilterLanguage = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 221px; */
`;

export const FilterLabel = styled.label`
  margin-bottom: 0.55vw;
  font-weight: 500;
  font-size: 0.97vw;
  line-height: 1.29;
  color: var(--color-text-fourth);
`;

export const LanguageInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const LanguageInput = styled.input`
  border-radius: 0.97vw;
  padding: 1.11vw 1.25vw;
  /* max-width: 221px; */
  background: var(--white);
  font-weight: 500;
  font-size: 1.25vw;
  line-height: 1.11;
  color: var(--black);
  outline: none;
`;

export const FilterLevel = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 198px; */
`;

export const LevelInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const LevelInput = styled.input`
  border-radius: 0.97vw;
  padding: 1.11vw 1.25vw;
  /* max-width: 198px; */
  background: var(--white);
  font-weight: 500;
  font-size: 1.25vw;
  line-height: 1.11;
  color: var(--black);
  outline: none;
`;

export const FilterPrice = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 124px; */
`;

export const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const PriceInput = styled.input`
  border-radius: 0.97vw;
  padding: 1.11vw 1.25vw;
  max-width: 8.61vw;
  background: var(--white);
  font-weight: 500;
  font-size: 1.25vw;
  line-height: 1.11;
  color: var(--black);
  outline: none;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.56vw;
  left: 0;
  right: 0;
  padding: 0.97vw 1.25vw;
  background: var(--white);
  border-radius: 0.83vw;
  border: 0.07vw solid #ccc;
  box-shadow: 0 0.14vw 0.69vw rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: var(--color-text-second);
  font-weight: 500;
  font-size: 1.25vw;
  line-height: 1.11;
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  &:hover {
    color: var(--black);
  }
`;

export const ChevronIcon = styled.img`
  position: absolute;
  right: 0.97vw;
  width: 1.39vw;
  height: 1.39vw;
  cursor: pointer;
  pointer-events: none;
  pointer-events: auto;
`;
