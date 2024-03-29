import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarImg,
  BookSvg,
  BookTrialLessonButton,
  CardInfo,
  Conditions,
  Expirience,
  HeartSvg,
  InfoSpan,
  InfoSpanUnderline,
  InfoTeacher,
  InfoTeacherContainer,
  LessonInfo,
  LessonsDone,
  LessonsOnline,
  LevelInfoItem,
  LevelInfoList,
  LoadMoreButton,
  PipeImg,
  Price,
  PriceSpan,
  Rating,
  ReadMore,
  Reviewer,
  ReviewerRating,
  ReviewerText,
  ReviewsItem,
  ReviewsList,
  ShowMoreInfoContainer,
  Speaks,
  StarSvg,
  SvgStatus,
  TeacherCardList,
  TeacherItem,
  TeachersContainer,
  Title,
  TitleCardContainer,
  TitleCardText,
  TitleCardTitle,
  TitleInfoList,
} from "./Teachers.styled";

import SvgStatusAvatar from "../../assets/images/Icons/status.svg";
import BookOpen from "../../assets/images/Icons/book-open.svg";
import Pipe from "../../assets/images/Icons/pipe.svg";
import Star from "../../assets/images/Icons/Star.svg";
import Heart from "../../assets/images/Icons/heart-normal.svg";
import fetchTeachersData from "../../services/databaseService";
import FilterTicher from "../../components/FilterTicher/FilterTicher";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [showMoreInfo, setShowMoreInfo] = useState({});

  const showMoreTogle = (index) => {
    setShowMoreInfo((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
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
      {/* <Filter>
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
      </Filter> */}
      <TeacherCardList>
        {teachersData &&
          teachersData.slice(0, visibleCards).map((teacher, index) => (
            <TeacherItem key={index}>
              <HeartSvg src={Heart} alt="Heart" />
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
                      <PipeImg src={Pipe} alt="Pipe" />
                      <LessonsDone>
                        Lessons done: {teacher.lessons_done}
                      </LessonsDone>
                      <PipeImg src={Pipe} alt="Pipe" />
                      <Rating>
                        <StarSvg src={Star} alt="Star" />
                        Rating: {teacher.rating}
                      </Rating>
                      <PipeImg src={Pipe} alt="Pipe" />
                      <Price>
                        Price / 1 hour:
                        <PriceSpan>{teacher.price_per_hour}$</PriceSpan>
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
                      Lesson Info: <InfoSpan> {teacher.lesson_info}</InfoSpan>
                    </LessonInfo>
                    <Conditions>
                      Conditions: <InfoSpan> {teacher.conditions}</InfoSpan>
                    </Conditions>
                    {showMoreInfo[index] && (
                      <ShowMoreInfoContainer>
                        <Expirience>{teacher.experience}</Expirience>
                        <ReviewsList>
                          {teacher.reviews.map((review, index) => (
                            <ReviewsItem key={index}>
                              <Reviewer>{review.reviewer_name}</Reviewer>
                              <ReviewerRating>
                                <StarSvg src={Star} alt="Star" />
                                {review.reviewer_rating}
                              </ReviewerRating>
                              <ReviewerText>{review.comment}</ReviewerText>
                            </ReviewsItem>
                          ))}
                        </ReviewsList>
                      </ShowMoreInfoContainer>
                    )}
                    {!showMoreInfo[index] && (
                      <ReadMore
                        onClick={() => {
                          showMoreTogle(index);
                        }}
                      >
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
                  <BookTrialLessonButton>
                    Book trial lesson
                  </BookTrialLessonButton>
                )}
              </InfoTeacherContainer>
            </TeacherItem>
          ))}
        {visibleCards < (teachersData && teachersData.length) && (
          <LoadMoreButton onClick={showMoreCards}>Load more</LoadMoreButton>
        )}
      </TeacherCardList>
    </TeachersContainer>
  );
};

export default Teachers;
