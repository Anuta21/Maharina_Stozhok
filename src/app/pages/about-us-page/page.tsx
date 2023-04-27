import { Footer, NavBar } from "../../components";
import { aboutUsText } from "./constants";
import { InfoContainer, Wrapper, BackgroundImage, Text } from "./styles";
import books from "./images/books-background.jpg";

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <BackgroundImage src={books} />
        <InfoContainer>
          <Text>{aboutUsText}</Text>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </>
  );
};
