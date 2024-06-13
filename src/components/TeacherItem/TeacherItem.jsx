import React, { useState } from "react";
import {
  Avatar,
  AvatarImg,
  CardInfo,
  BookSvg,
  PipeImg,
  Price,
  PriceSpan,
  Rating,
  ReadMore,
  ReviewsItem,
  ReviewsList,
  ShowMoreInfoContainer,
  Speaks,
  StarSvg,
  SvgStatus,
  Title,
  TitleCardContainer,
  TitleCardText,
  TitleCardTitle,
  TitleInfoList,
  InfoTeacher,
  LessonsOnline,
  LessonsDone,
  LevelInfoItem,
  LevelInfoList,
  BookTrialLessonButton,
  FavoriteButton,
  HeartIconActive,
  HeartIconNormal,
  Text,
  TextContainer,
} from "./TeacherItem.styled";

import SvgStatusAvatar from "../../assets/images/Icons/status.svg";
import BookOpen from "../../assets/images/Icons/book-open.svg";
import PipeIcon from "../../assets/images/Icons/pipe.svg";
import StarIcon from "../../assets/images/Icons/Star.svg";
import HeartNormal from "../../assets/images/Icons/heart-normal.svg";
import HeartActive from "../../assets/images/Icons/heart-active.svg";
import {
  Conditions,
  Experience,
  InfoSpan,
  InfoSpanUnderline,
  InfoTeacherContainer,
  LessonInfo,
  Reviewer,
  ReviewerRating,
  ReviewerText,
  TeacherItemContainer,
} from "./TeacherItem.styled";
import Modal from "../../components/Modal/Modal";
import PopUpBookTrialLesson from "../../components/PopUpBookTrialLesson/PopUpBookTrialLesson";
import { selectIsAuth } from "../../redux/Auth/authSelector";
import { useSelector } from "react-redux";

const TeacherItem = ({
  teacher,
  index,
  showMoreInfo,
  showMoreToggle,
  onFavoriteToggle,
  isFavorite,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const isAuth = useSelector(selectIsAuth);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleAuthPopup = () => {
    setIsAuthPopupOpen(!isAuthPopupOpen);
  };

  const handleFavoriteButtonClick = (e) => {
    e.stopPropagation();
    if (!isAuth) {
      toggleAuthPopup();
    } else {
      onFavoriteToggle(teacher);
    }
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <TeacherItemContainer onClick={() => handleTeacherClick(teacher)}>
      <FavoriteButton
        type="button"
        onClick={handleFavoriteButtonClick}
        $isFavorite={isFavorite}
      >
        {isFavorite ? (
          <HeartIconActive src={HeartActive} alt="Heart icon active" />
        ) : (
          <HeartIconNormal src={HeartNormal} alt="Heart icon normal" />
        )}
      </FavoriteButton>
      <Avatar>
        <AvatarImg src={teacher.avatar_url} alt="Teacher avatar" />
        <SvgStatus src={SvgStatusAvatar} alt="Teacher status avatar" />
      </Avatar>
      <InfoTeacherContainer>
        <CardInfo>
          <TitleCardContainer>
            <Title>
              <TitleCardText>Languages</TitleCardText>
              <TitleCardTitle>
                {teacher.name} {teacher.surname}
              </TitleCardTitle>
            </Title>
            <TitleInfoList>
              <LessonsOnline>
                <BookSvg src={BookOpen} alt="Book open" />
                Lessons online
              </LessonsOnline>
              <PipeImg src={PipeIcon} alt="Pipe" />
              <LessonsDone>Lessons done: {teacher.lessons_done}</LessonsDone>
              <PipeImg src={PipeIcon} alt="Pipe" />
              <Rating>
                <StarSvg src={StarIcon} alt="Star" />
                Rating: {teacher.rating}
              </Rating>
              <PipeImg src={PipeIcon} alt="Pipe" />
              <Price>
                Price / 1 hour: <PriceSpan>{teacher.price_per_hour}$</PriceSpan>
              </Price>
            </TitleInfoList>
          </TitleCardContainer>
          <InfoTeacher>
            <Speaks>
              Speaks:{" "}
              <InfoSpanUnderline>
                {teacher.languages.join(", ")}
              </InfoSpanUnderline>
            </Speaks>
            <LessonInfo>
              Lesson Info: <InfoSpan>{teacher.lesson_info}</InfoSpan>
            </LessonInfo>
            <Conditions>
              Conditions: <InfoSpan>{teacher.conditions}</InfoSpan>
            </Conditions>
            {showMoreInfo[index] && (
              <ShowMoreInfoContainer>
                <Experience>{teacher.experience}</Experience>
                <ReviewsList>
                  {teacher.reviews.map((review, index) => (
                    <ReviewsItem key={index}>
                      <Reviewer>{review.reviewer_name}</Reviewer>
                      <ReviewerRating>
                        <StarSvg src={StarIcon} alt="Star" />
                        {review.reviewer_rating}
                      </ReviewerRating>
                      <ReviewerText>{review.comment}</ReviewerText>
                    </ReviewsItem>
                  ))}
                </ReviewsList>
              </ShowMoreInfoContainer>
            )}
            {!showMoreInfo[index] && (
              <ReadMore onClick={() => showMoreToggle(index)}>
                Read more
              </ReadMore>
            )}
          </InfoTeacher>
        </CardInfo>
        <LevelInfoList>
          {teacher.levels.map((level, index) => (
            <LevelInfoItem key={index}>#{level}</LevelInfoItem>
          ))}
        </LevelInfoList>
        {showMoreInfo[index] && (
          <BookTrialLessonButton
            onClick={() => {
              setSelectedTeacher(teacher);
              setIsPopupOpen(true);
            }}
          >
            Book trial lesson
          </BookTrialLessonButton>
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
        {isAuthPopupOpen && (
          <Modal isOpen={isAuthPopupOpen} onClose={toggleAuthPopup}>
            <TextContainer>
              <Text>You need to be logged in to use this feature.</Text>
            </TextContainer>
          </Modal>
        )}
      </InfoTeacherContainer>
    </TeacherItemContainer>
  );
};

export default TeacherItem;
