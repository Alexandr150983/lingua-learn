import React from "react";
import {
  Filter,
  FilterLabel,
  FilterLanguage,
  FilterLevel,
  FilterPrice,
  LanguageInput,
  LevelInput,
  PriceInput,
} from "./FilterTeacher.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/Teachers/teachersSlice";
import { selectTeachersFilter } from "../../redux/Teachers/teachersSelector";
import chevronDown from "../../assets/images/Icons/chevron-down.svg";

const FilterTeacher = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectTeachersFilter);
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Filter>
      <FilterLanguage>
        <FilterLabel>Languages</FilterLabel>
        <LanguageInput onChange={handleFilter} value={filter}></LanguageInput>
        <span>
          <img src={chevronDown} alt="chevron down" />
        </span>
      </FilterLanguage>
      <FilterLevel>
        <FilterLabel>Level of knowledge</FilterLabel>
        <LevelInput></LevelInput>
      </FilterLevel>
      <FilterPrice>
        <FilterLabel>Price</FilterLabel>
        <PriceInput></PriceInput>
      </FilterPrice>
    </Filter>
  );
};

export default FilterTeacher;
