import { useNavigate } from "react-router-dom";
import { Images } from "../../common/assets";
import { NavBar } from "../../components";
import { Wrapper, CenterContainer, Home, Arrow } from "./styles";

export const ThanksPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavBar />
      <CenterContainer>
        <img src={Images.thanks} alt="thanks" />
        Successful order!
        <br /> Thank you for choosing us! We appreciate it.
        <Arrow src={Images.arrow} alt="arrow" />
        <Home onClick={() => navigate("/")}>Home page</Home>
      </CenterContainer>
    </Wrapper>
  );
};
