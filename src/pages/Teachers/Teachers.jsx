import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarImg,
  BookSvg,
  CardInfo,
  Conditions,
  Filter,
  FilterLabel,
  FilterLanguage,
  FilterLevel,
  FilterPrice,
  HeartSvg,
  InfoTeacher,
  InfoTeacherContainer,
  LanguageInput,
  LessonInfo,
  LessonsDone,
  LessonsOnline,
  LevelInfoItem,
  LevelInfoList,
  LevelInput,
  PipeImg,
  Price,
  PriceInput,
  PriceSpan,
  Rating,
  ReadMore,
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

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);

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
      <Filter>
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
      </Filter>
      <TeacherCardList>
        {teachersData &&
          Object.values(teachersData).map((teacher, index) => (
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
                        Price / 1 hour:{" "}
                        <PriceSpan>{teacher.price_per_hour}$</PriceSpan>
                      </Price>
                    </TitleInfoList>
                  </TitleCardContainer>
                  <InfoTeacher>
                    <Speaks>Speaks: {teacher.languages}</Speaks>
                    <LessonInfo>Lesson Info: {teacher.lesson_info}</LessonInfo>
                    <Conditions>Conditions: {teacher.conditions}</Conditions>
                    <ReadMore>Read more</ReadMore>
                  </InfoTeacher>
                </CardInfo>
                <LevelInfoList>
                  {teacher.levels &&
                    Object.values(teacher.levels).map((level, index) => (
                      <LevelInfoItem key={index}>#{level}</LevelInfoItem>
                    ))}
                </LevelInfoList>
              </InfoTeacherContainer>
            </TeacherItem>
          ))}
      </TeacherCardList>
    </TeachersContainer>
  );
};

export default Teachers;
