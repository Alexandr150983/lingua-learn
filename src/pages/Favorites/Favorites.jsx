import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../redux/Favorites/favoritesSlice";
import TeacherItem from "components/TeacherItem/TeacherItem";
import {
  CenteredMessage,
  StyledFavorite,
  TeacherCardList,
  Title,
} from "./Favorites.styled";
import { selectorFavorites } from "../../redux/Favorites/favoritesSelector";
import { useState } from "react";

const FavoritesTeacher = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectorFavorites);

  const [showMoreInfo, setShowMoreInfo] = useState({});

  const handleShowMoreToggle = (index) => {
    setShowMoreInfo((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleFavoriteToggle = (teacherId) => {
    dispatch(removeFavorite(teacherId));
  };

  return (
    <StyledFavorite>
      <TeacherCardList>
        {favorites.length > 0 ? (
          favorites.map((teacher, index) => (
            <TeacherItem
              key={index}
              teacher={teacher}
              index={index}
              showMoreInfo={showMoreInfo}
              showMoreTogle={handleShowMoreToggle}
              onFavoriteToggle={() => handleFavoriteToggle(teacher.name)}
              isFavorite={true}
            />
          ))
        ) : (
          <CenteredMessage>
            <Title>You don't have any teacher.</Title>
          </CenteredMessage>
        )}
      </TeacherCardList>
    </StyledFavorite>
  );
};

export default FavoritesTeacher;
