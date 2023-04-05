import landingBook from "../../common/assets/images/landing-book.png";
import { NavBar } from "../../components";
import {
  MainText,
  Wrapper,
  BookImg,
  TextContainer,
  BookContainer,
} from "./styles";

export const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <TextContainer>
        <MainText>Books of all genres</MainText>
      </TextContainer>
      <BookContainer>
        <BookImg src={landingBook} alt="book" />
      </BookContainer>
    </Wrapper>
  );
};
