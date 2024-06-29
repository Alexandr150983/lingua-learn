import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import chevronDown from "assets/images/Icons/chevron-down.svg";

import {
  Filter,
  FilterLabel,
  FilterLanguage,
  FilterLevel,
  FilterPrice,
  LanguageInputContainer,
  LanguageInput,
  LevelInputContainer,
  LevelInput,
  PriceInputContainer,
  PriceInput,
  Dropdown,
  DropdownItem,
  ChevronIcon,
} from "./FilterTeacher.styled";
import { setFilter } from "../../redux/Teachers/teachersSlice";
import {
  selectTeachersFilter,
  selectTeachersLanguages,
  selectTeachersLevels,
  selectTeachersPrices,
} from "../../redux/Teachers/teachersSelector";

const FilterTeacher = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectTeachersFilter);
  const languages = useSelector(selectTeachersLanguages);
  const levels = useSelector(selectTeachersLevels);
  const prices = useSelector(selectTeachersPrices);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);
  const levelDropdownRef = useRef(null);
  const priceDropdownRef = useRef(null);

  const handleLanguageSelect = (language) => {
    dispatch(setFilter({ ...filter, language }));
    setIsLanguageDropdownOpen(false);
  };

  const handleLevelSelect = (level) => {
    dispatch(setFilter({ ...filter, level }));
    setIsLevelDropdownOpen(false);
  };

  const handlePriceSelect = (price) => {
    dispatch(setFilter({ ...filter, price }));
    setIsPriceDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target)
    ) {
      setIsLanguageDropdownOpen(false);
    }
    if (
      levelDropdownRef.current &&
      !levelDropdownRef.current.contains(event.target)
    ) {
      setIsLevelDropdownOpen(false);
    }
    if (
      priceDropdownRef.current &&
      !priceDropdownRef.current.contains(event.target)
    ) {
      setIsPriceDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Filter>
      <FilterLanguage>
        <FilterLabel>Languages</FilterLabel>
        <LanguageInputContainer ref={languageDropdownRef}>
          <LanguageInput
            name="language"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            value={filter.language}
            readOnly
          />
          <ChevronIcon
            src={chevronDown}
            alt="chevron down"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          />
          {isLanguageDropdownOpen && (
            <Dropdown>
              {languages.map((language, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </LanguageInputContainer>
      </FilterLanguage>
      <FilterLevel>
        <FilterLabel>Level of knowledge</FilterLabel>
        <LevelInputContainer ref={levelDropdownRef}>
          <LevelInput
            name="level"
            onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
            value={filter.level}
            readOnly
          />
          <ChevronIcon
            src={chevronDown}
            alt="chevron down"
            onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
          />
          {isLevelDropdownOpen && (
            <Dropdown>
              {levels.map((level, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleLevelSelect(level)}
                >
                  {level}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </LevelInputContainer>
      </FilterLevel>
      <FilterPrice>
        <FilterLabel>Price</FilterLabel>
        <PriceInputContainer ref={priceDropdownRef}>
          <PriceInput
            name="price"
            onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
            value={filter.price}
            readOnly
          />
          <ChevronIcon
            src={chevronDown}
            alt="chevron down"
            onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
          />
          {isPriceDropdownOpen && (
            <Dropdown>
              {prices.map((price, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handlePriceSelect(price)}
                >
                  {price}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </PriceInputContainer>
      </FilterPrice>
    </Filter>
  );
};

export default FilterTeacher;
