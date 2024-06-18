import {
  Advantages,
  GetStart,
  HomeImg,
  Item,
  Language,
  ListItems,
  SectionContainer,
  TextAdvantages,
  TextItem,
  TitleAdvantages,
  TitleItem,
  Tutors,
  Wrapper,
} from "./Home.styled";
import homeImg from "../../assets/images/Home/block-pictur.png";
import { Link } from "react-router-dom";
import { TEACHERS_ROUTE } from "../../constants/routes";

const Home = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <Advantages>
          <TitleAdvantages>
            Unlock your potential with the best <Language>language </Language>
            tutors
          </TitleAdvantages>
          <TextAdvantages>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </TextAdvantages>
          <Link to={TEACHERS_ROUTE}>
            <GetStart>Get started</GetStart>
          </Link>
        </Advantages>
        <HomeImg>
          <img src={homeImg} alt="Home img" />
        </HomeImg>
      </Wrapper>
      <Tutors>
        <ListItems>
          <Item>
            <TitleItem>32,000&nbsp;+</TitleItem>
            <TextItem>Experienced tutors</TextItem>
          </Item>
          <Item>
            <TitleItem>300,000&nbsp;+</TitleItem>
            <TextItem>5-star tutor reviews</TextItem>
          </Item>
          <Item>
            <TitleItem>120&nbsp;+</TitleItem>
            <TextItem>Subjects taught</TextItem>
          </Item>
          <Item>
            <TitleItem>200&nbsp;+</TitleItem>
            <TextItem>Tutor nationalities</TextItem>
          </Item>
        </ListItems>
      </Tutors>
    </SectionContainer>
  );
};

export default Home;
