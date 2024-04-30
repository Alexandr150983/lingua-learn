import React from "react";
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
  HeartSvg,
  BookTrialLessonButton,
} from "./TeacherItem.styled";

import SvgStatusAvatar from "../../assets/images/Icons/status.svg";
import BookOpen from "../../assets/images/Icons/book-open.svg";
import PipeIcon from "../../assets/images/Icons/pipe.svg";
import StarIcon from "../../assets/images/Icons/Star.svg";
import HeartIcon from "../../assets/images/Icons/heart-normal.svg";
import {
  Conditions,
  Expirience,
  InfoSpan,
  InfoSpanUnderline,
  InfoTeacherContainer,
  LessonInfo,
  Reviewer,
  ReviewerRating,
  ReviewerText,
  TeacherItemContainer,
} from "./TeacherItem.styled";

const TeacherItem = ({
  teacher,
  index,
  showMoreInfo,
  handleTeacherClick,
  showMoreTogle,
  setSelectedTeacher,
  setIsPopupOpen,
}) => {
  return (
    <TeacherItemContainer onClick={() => handleTeacherClick(teacher)}>
      <HeartSvg src={HeartIcon} alt="Heart" />
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
                <Expirience>{teacher.experience}</Expirience>
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
              <ReadMore onClick={() => showMoreTogle(index)}>
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
      </InfoTeacherContainer>
    </TeacherItemContainer>
  );
};

export default TeacherItem;
