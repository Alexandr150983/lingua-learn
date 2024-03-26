import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarImg,
  CardInfo,
  Filter,
  FilterLabel,
  FilterLanguage,
  FilterLevel,
  FilterPrice,
  InfoTeacherContainer,
  LanguageInput,
  LevelInfoItem,
  LevelInfoList,
  LevelInput,
  PriceInput,
  SvgStatus,
  TeacherCardList,
  TeacherItem,
  TeachersContainer,
} from "./Teachers.styled";

import SvgStatusAvatar from "../../assets/images/Icons/status.svg";
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
              <Avatar>
                <AvatarImg src={teacher.avatar_url} alt="Teacher avatar" />
                <SvgStatus src={SvgStatusAvatar} alt="Teacher status avatar" />
              </Avatar>
              <InfoTeacherContainer>
                <CardInfo></CardInfo>
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
