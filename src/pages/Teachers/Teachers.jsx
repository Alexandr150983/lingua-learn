import React, { useEffect, useState } from "react";
import {
  TeachersContainer,
  TeacherCardList,
  LoadMoreButton,
} from "./Teachers.styled";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import fetchTeachersData from "../../services/databaseService";
import FilterTicher from "../../components/FilterTicher/FilterTicher";
import PopUpBookTrialLesson from "../../components/PopUpBookTrialLesson/PopUpBookTrialLesson";
import Modal from "components/Modal/Modal";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const [showMoreInfo, setShowMoreInfo] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

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
    const fetchData = async () => {
      const data = await fetchTeachersData();
      console.log(data);
      setTeachersData(data);
    };
    fetchData();
  }, []);

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
