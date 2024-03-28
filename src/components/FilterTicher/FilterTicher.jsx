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
} from "./FilterTicher.styled";

const FilterTicher = () => {
  return (
    <Filter>
      <FilterLanguage>
        <FilterLabel>Languages</FilterLabel>
        <LanguageInput></LanguageInput>
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

export default FilterTicher;
