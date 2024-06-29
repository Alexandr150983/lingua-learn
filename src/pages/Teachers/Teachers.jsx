import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Loader, ErrorMessage, TeacherItem, FilterTeacher } from "components";

import {
  TeachersContainer,
  TeacherCardList,
  LoadMoreButton,
} from "./Teachers.styled";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/Favorites/favoritesSlice";
import {
  selectTeachersData,
  selectTeachersError,
  selectTeachersFilter,
  selectTeachersIsLoading,
} from "../../redux/Teachers/teachersSelector";
import { requestTeachers } from "../../redux/Teachers/teachersSlice";
import { selectFavorites } from "../../redux/Favorites/favoritesSelector";

const Teachers = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [showMoreInfo, setShowMoreInfo] = useState({});
  const dispatch = useDispatch();
  const teachersData = useSelector(selectTeachersData);
  const isLoading = useSelector(selectTeachersIsLoading);
  const error = useSelector(selectTeachersError);
  const filter = useSelector(selectTeachersFilter);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(requestTeachers());
  }, [dispatch]);

  const filteredTeachers = teachersData.filter((teacher) => {
    const { language, level, price } = filter;

    const matchesLanguage =
      !language ||
      teacher.languages.some((lang) =>
        lang.toLowerCase().includes(language.toLowerCase())
      );

    const matchesLevel =
      !level ||
      teacher.levels.some((lvl) =>
        lvl.toLowerCase().includes(level.toLowerCase())
      );

    const matchesPrice = !price || teacher.price_per_hour <= parseFloat(price);

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  const showMoreToggle = (index) => {
    setShowMoreInfo((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const handleFavoriteToggle = (teacher) => {
    const isCurrentlyFavorite = favorites.some(
      (favorite) =>
        favorite.name === teacher.name && favorite.surname === teacher.surname
    );

    if (isCurrentlyFavorite) {
      dispatch(removeFavorite(`${teacher.name} ${teacher.surname}`));
    } else {
      dispatch(addFavorite(teacher));
    }
  };

  return (
    <TeachersContainer>
      <FilterTeacher />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <TeacherCardList>
        {filteredTeachers.slice(0, visibleCards).map((teacher, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
            index={index}
            showMoreInfo={showMoreInfo}
            showMoreToggle={showMoreToggle}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.some(
              (favorite) =>
                favorite.name === teacher.name &&
                favorite.surname === teacher.surname
            )}
          />
        ))}
      </TeacherCardList>
      {visibleCards < filteredTeachers.length && (
        <LoadMoreButton onClick={showMoreCards}>Load more</LoadMoreButton>
      )}
    </TeachersContainer>
  );
};

export default Teachers;
