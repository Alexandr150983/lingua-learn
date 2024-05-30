import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TeachersContainer,
  TeacherCardList,
  LoadMoreButton,
} from "./Teachers.styled";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/Favorites/favoritesSlice";
import { requestTeachers } from "../../redux/Teachers/teachersSlice";
import {
  selectTeachersData,
  selectTeachersError,
  selectTeachersFilter,
  selectTeachersIsLoading,
} from "../../redux/Teachers/teachersSelector";
import FilterTeacher from "../../components/FilterTeacher/FilterTeacher";
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

  console.log(teachersData);

  useEffect(() => {
    dispatch(requestTeachers());
  }, [dispatch]);

  const filteredTeachers = useMemo(() => {
    const { language, level, price } = filter;

    return teachersData.filter((teacher) => {
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
      const matchesPrice =
        !price || teacher.price_per_hour <= parseFloat(price);

      return matchesLanguage && matchesLevel && matchesPrice;
    });
  }, [teachersData, filter]);

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
      (favorite) => favorite.name === teacher.name
    );

    if (isCurrentlyFavorite) {
      dispatch(removeFavorite(teacher.name + " " + teacher.surname));
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
              (favorite) => favorite.name === teacher.name
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
