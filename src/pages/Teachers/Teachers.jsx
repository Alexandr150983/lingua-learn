import React, { useEffect, useState } from "react";
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
  selectTeachersIsLoading,
} from "../../redux/Teachers/teachersSelector";
import FilterTeacher from "../../components/FilterTeacher/FilterTeacher";
import { selectFavorites } from "../../redux/Favorites/favoritesSelector";

const Teachers = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [showMoreInfo, setShowMoreInfo] = useState({});
  const teachersData = useSelector(selectTeachersData);
  const isLoading = useSelector(selectTeachersIsLoading);
  const error = useSelector(selectTeachersError);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  console.log(teachersData);

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
      dispatch(removeFavorite(teacher.name));
    } else {
      dispatch(addFavorite(teacher));
    }
  };

  useEffect(() => {
    if (!teachersData || teachersData.length === 0) {
      dispatch(requestTeachers());
    }
  }, [dispatch, teachersData]);

  return (
    <TeachersContainer>
      <FilterTeacher />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <TeacherCardList>
        {teachersData !== null &&
          teachersData
            .slice(0, visibleCards)
            .map((teacher, index) => (
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
      {visibleCards < (teachersData && teachersData.length) && (
        <LoadMoreButton onClick={showMoreCards}>Load more</LoadMoreButton>
      )}
    </TeachersContainer>
  );
};

export default Teachers;
