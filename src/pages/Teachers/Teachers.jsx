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
  TeacherCard,
  TeacherCardList,
  TeacherItem,
  TeachersContainer,
} from "./Teachers.styled";
import database from "../../services/firebase";
import { get, ref } from "firebase/database";
import SvgStatusAvatar from "../../assets/images/Icons/status.svg";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);

  useEffect(() => {
    const databaseRef = ref(database, "/");

    get(databaseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data);
          setTeachersData(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data", error);
      });
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
      <TeacherCard>
        <TeacherCardList>
          {teachersData &&
            Object.values(teachersData).map((teacher, index) => (
              <TeacherItem key={index}>
                <Avatar>
                  <AvatarImg src={teacher.avatar_url} alt="Teacher avatar" />
                  <SvgStatus
                    src={SvgStatusAvatar}
                    alt="Teacher status avatar"
                  />
                </Avatar>
                <InfoTeacherContainer>
                  <CardInfo></CardInfo>
                  <LevelInfoList>
                    <LevelInfoItem>{teacher.levels}</LevelInfoItem>
                  </LevelInfoList>
                </InfoTeacherContainer>
              </TeacherItem>
            ))}
        </TeacherCardList>
      </TeacherCard>
    </TeachersContainer>
  );
};

export default Teachers;
