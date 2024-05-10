import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TeachersContainer,
  TeacherCardList,
  LoadMoreButton,
} from "./Teachers.styled";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import FilterTicher from "../../components/FilterTicher/FilterTicher";
import PopUpBookTrialLesson from "../../components/PopUpBookTrialLesson/PopUpBookTrialLesson";
import Modal from "components/Modal/Modal";
import { requestTeachers } from "../../redux/Teachers/teachersSlice";

const Teachers = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [showMoreInfo, setShowMoreInfo] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const dispatch = useDispatch();
  const { teachersData } = useSelector((state) => state.teachers);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const showMoreTogle = (index) => {
    setShowMoreInfo((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  useEffect(() => {
    dispatch(requestTeachers());
  }, [dispatch]);

  return (
    <TeachersContainer>
      <FilterTicher />
      <TeacherCardList>
        {teachersData &&
          teachersData
            .slice(0, visibleCards)
            .map((teacher, index) => (
              <TeacherItem
                key={index}
                teacher={teacher}
                index={index}
                showMoreInfo={showMoreInfo}
                handleTeacherClick={handleTeacherClick}
                showMoreTogle={showMoreTogle}
                setSelectedTeacher={setSelectedTeacher}
                setIsPopupOpen={setIsPopupOpen}
              />
            ))}
      </TeacherCardList>
      {visibleCards < (teachersData && teachersData.length) && (
        <LoadMoreButton onClick={showMoreCards}>Load more</LoadMoreButton>
      )}
      {isPopupOpen && selectedTeacher && (
        <Modal isOpen={isPopupOpen} onClose={togglePopup}>
          <PopUpBookTrialLesson
            teacherAvatar={selectedTeacher.avatar_url}
            teacherName={selectedTeacher.name}
            teacherSurname={selectedTeacher.surname}
          />
        </Modal>
      )}
    </TeachersContainer>
  );
};

export default Teachers;
