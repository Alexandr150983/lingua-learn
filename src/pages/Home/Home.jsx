import {
  Advantages,
  GetStart,
  HomeImg,
  SectionContainer,
  Text,
  Title,
  Tutors,
  Wrapper,
} from "./Home.styled";
import homeImg from "../../assets/images/Home/block-pictur.png";
const Home = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <Advantages>
          <Title>Unlock your potential with the best language tutors</Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <GetStart>Get started</GetStart>
        </Advantages>
        <HomeImg>
          <img src={homeImg} alt="Home img"></img>
        </HomeImg>
      </Wrapper>

      <Tutors></Tutors>
    </SectionContainer>
  );
};

export default Home;
