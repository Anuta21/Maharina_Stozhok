import { useNavigate } from "react-router-dom";
import { Images, ST3 } from "../../common/assets";
import { NavBar } from "../../components";
import { Wrapper, CenterContainer, Home, Arrow } from "./styles";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavBar />
      <CenterContainer>
        404
        <ST3>
          Sorry
          <br />
          Page not found
        </ST3>
        <Arrow src={Images.arrow} alt="arrow" />
        <Home onClick={() => navigate("/")}>Home page</Home>
      </CenterContainer>
    </Wrapper>
  );
};
